const StyleDictionaryPackage = require('style-dictionary');
const version = require('./package.json').version;
const crypto = require('node:crypto');
const { transform } = require('@divriots/style-dictionary-to-figma');

const hash = crypto
  .createHash('md5')
  .update(JSON.stringify(StyleDictionaryPackage.tokens))
  .digest('hex');
// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

StyleDictionaryPackage.registerFileHeader({
  name: 'myLDSHeader',
  fileHeader: (defaultMessage) => {
    // defaultMessage are the 2 lines above that appear in the default file header
    // you can use this to add a message before or after the default message 👇

    // the fileHeader function should return an array of strings
    // which will be formatted in the proper comment style for a given format
    return [
      `@许可信息`,
      `@license`,
      `ITSI https://github.com/Tangcuyu/lds-design-tokens.git`,
      `Copyright (c) 2022 ITSI Information Technology Ltd.,`,
      ``,
      `版本号：${version}`,
      ...defaultMessage,
      `Build hash ${hash}`,
    ];
  },
});

function getStyleDictionaryConfig(brand, platform) {
  return {
    source: [
      `src/brands/${brand}/*.json5`,
      'src/globals/**/*.json5',
      'src/components/**/*.json5',
      `src/platforms/${platform}/*.json5`,
    ],
    platforms: {
      'web/js': {
        transformGroup: 'tokens-js',
        buildPath: `dist/web/${brand}/`,
        prefix: 'lds',
        files: [
          // uncomment these ones if you need to generate more formats
          {
            destination: 'tokens.module.js',
            format: 'javascript/module',
            options: {
              fileHeader: 'myLDSHeader',
            },
          },
          {
            destination: 'tokens.object.js',
            format: 'javascript/object',
            options: {
              fileHeader: 'myLDSHeader',
            },
          },
          {
            destination: 'tokens.es6.js',
            format: 'javascript/es6',
            options: {
              fileHeader: 'myLDSHeader',
            },
          },
          {
            format: 'typescript/es6-declarations',
            destination: 'tokens.d.ts',
            options: {
              fileHeader: 'myLDSHeader',
            },
          },
        ],
      },
      'web/json': {
        transformGroup: 'tokens-json',
        buildPath: `dist/web/${brand}/`,
        prefix: 'lds',
        files: [
          {
            destination: 'tokens.json',
            format: 'json/flat',
          },
        ],
      },
      'web/scss': {
        transformGroup: 'scss',
        buildPath: `dist/web/${brand}/`,
        prefix: 'lds',
        files: [
          {
            destination: 'tokens.scss',
            format: 'scss/variables',
            options: {
              outputReferences: true,
              fileHeader: 'myLDSHeader',
              themeable: true,
            },
          },
        ],
      },
      'web/bs': {
        transformGroup: 'scss',
        buildPath: `dist/bigscreen/${brand}/`,
        prefix: 'lds',
        files: [
          {
            destination: 'tokens.scss',
            format: 'scss/variables',
            options: {
              outputReferences: true,
              fileHeader: 'myLDSHeader',
              themeable: true,
            },
          },
        ],
      },
      'web/less': {
        transformGroup: 'less',
        buildPath: `dist/web/${brand}/`,
        prefix: 'lds',
        files: [
          {
            destination: 'tokens.less',
            format: 'less/variables',
            options: {
              outputReferences: true,
              fileHeader: 'myLDSHeader',
            },
          },
        ],
      },
      'web/css': {
        transformGroup: 'css',
        buildPath: `dist/web/${brand}/`,
        prefix: 'lds',
        files: [
          {
            destination: 'tokens.css',
            format: 'css/variables',
            options: {
              outputReferences: true,
              fileHeader: 'myLDSHeader',
            },
          },
        ],
      },
      figma: {
        transformGroup: 'js',
        buildPath: 'dist/figma/',
        prefix: 'lds',
        files: [
          {
            destination: `design-tokens.json`,
            format: 'figmaTokensPlugin',
            options: {
              outputReferences: true,
              fileHeader: 'myLDSHeader',
            },
          },
        ],
      },
      styleguide: {
        transformGroup: 'styleguide',
        buildPath: `dist/styleguide/`,
        prefix: 'lds',
        files: [
          {
            destination: `${platform}_${brand}.json`,
            format: 'json/flat',
            options: {
              outputReferences: true,
            },
          },
          {
            destination: `${platform}_${brand}.scss`,
            format: 'scss/variables',
            options: {
              outputReferences: true,
            },
          },
        ],
      },
      ios: {
        transformGroup: 'ios',
        buildPath: `dist/ios/${brand}/`,
        prefix: 'lds',
        files: [
          {
            destination: 'tokens-all.plist',
            format: 'ios/plist',
            options: {
              outputReferences: true,
            },
          },
        ],
      },
      android: {
        transformGroup: 'android',
        buildPath: `dist/android/${brand}/`,
        prefix: 'lds',
        files: [
          {
            destination: 'tokens-all.xml',
            format: 'android/colors',
            options: {
              outputReferences: true,
            },
          },
        ],
      },
    },
  };
}

// REGISTER CUSTOM FORMATS + TEMPLATES + TRANSFORMS + TRANSFORM GROUPS

StyleDictionaryPackage.registerFormat({
  name: 'json/flat',
  formatter: function (dictionary) {
    return JSON.stringify(dictionary.allProperties, null, 2);
  },
});

// 注册用于转换SD Tokens到Figma Tokens的Formatter
StyleDictionaryPackage.registerFormat({
  name: 'figmaTokensPlugin',
  formatter: ({ dictionary }) => {
    const transformedTokens = transform(dictionary.tokens);
    return JSON.stringify(transformedTokens, null, 2);
  },
});

StyleDictionaryPackage.registerTransformGroup({
  name: 'styleguide',
  transforms: ['attribute/cti', 'name/cti/kebab', 'size/px', 'color/css'],
});

StyleDictionaryPackage.registerTransformGroup({
  name: 'tokens-js',
  transforms: ['name/cti/constant', 'size/px', 'color/hex'],
});

StyleDictionaryPackage.registerTransformGroup({
  name: 'tokens-json',
  transforms: ['attribute/cti', 'name/cti/kebab', 'size/px', 'color/css'],
});

StyleDictionaryPackage.registerTransformGroup({
  name: 'tokens-scss',
  // to see the pre-defined "scss" transformation use: console.log(StyleDictionaryPackage.transformGroup['scss']);
  transforms: ['name/cti/kebab', 'time/seconds', 'size/px', 'color/css'],
});

console.log('Build started...');

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

['web', 'ios', 'android', 'bigscreen'].map(function (platform) {
  ['emergency', 'financial', 'internet'].map(function (brand) {
    console.log('\n==============================================');
    console.log(`\nProcessing: [${platform}] [${brand}]`);

    const StyleDictionary = StyleDictionaryPackage.extend(
      getStyleDictionaryConfig(brand, platform),
    );

    if (platform === 'web') {
      StyleDictionary.buildPlatform('web/js');
      StyleDictionary.buildPlatform('web/json');
      StyleDictionary.buildPlatform('web/scss');
      StyleDictionary.buildPlatform('web/less');
      StyleDictionary.buildPlatform('web/css');
    } else if (platform === 'ios') {
      StyleDictionary.buildPlatform('ios');
    } else if (platform === 'android') {
      StyleDictionary.buildPlatform('android');
    } else if (platform === 'bigscreen') {
      StyleDictionary.buildPlatform('web/bs');
    }

    StyleDictionary.buildPlatform('figma');
    StyleDictionary.buildPlatform('styleguide');

    console.log('\nEnd processing');
  });
});

console.log('\n==============================================');
console.log('\nBuild completed!');
