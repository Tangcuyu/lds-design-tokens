const StyleDictionaryPackage = require('style-dictionary');
const version = require('./package.json').version;
const crypto = require('node:crypto');

const hash = crypto
  .createHash('md5')
  .update(JSON.stringify(StyleDictionaryPackage.tokens))
  .digest('hex');
// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

function getStyleDictionaryConfig(brand, platform) {
  return {
    source: [
      `src/brands/${brand}/*.json`,
      'src/globals/**/*.json',
      'src/semantic/**/*.json',
      `src/platforms/${platform}/*.json`,
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
      // there are different possible formats for iOS (JSON, PLIST, etc.) so you will have to agree with the iOS devs which format they prefer
      ios: {
        // I have used custom formats for iOS but keep in mind that Style Dictionary offers some default formats/templates for iOS,
        // so have a look at the documentation before creating custom templates/formats, maybe they already work for you :)
        transformGroup: 'tokens-ios',
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
          {
            destination: 'tokens-colors.plist',
            format: 'ios/plist',
            filter: {
              type: 'color',
            },
            options: {
              outputReferences: true,
            },
          },
        ],
      },
      android: {
        // I have used custom formats for Android but keep in mind that Style Dictionary offers some default formats/templates for Android,
        // so have a look at the documentation before creating custom templates/formats, maybe they already work for you :)
        transformGroup: 'tokens-android',
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
          {
            destination: 'tokens-colors.xml',
            format: 'android/colors',
            filter: {
              type: 'color',
            },
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

// if you want to see the available pre-defined formats, transforms and transform groups uncomment this
// console.log(StyleDictionaryPackage);

StyleDictionaryPackage.registerFormat({
  name: 'json/flat',
  formatter: function (dictionary) {
    return JSON.stringify(dictionary.allProperties, null, 2);
  },
});

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

// I wanted to use this custom transform instead of the "prefix" property applied to the platforms
// because I wanted to apply the "token" prefix only to actual tokens and not to the aliases
// but I've found out that in case of "name/cti/constant" the prefix was not respecting the case for the "prefix" part
//
// StyleDictionaryPackage.registerTransform({
//     name: 'name/prefix-token',
//     type: 'name',
//     matcher: function(prop) {
//         return prop.attributes.category !== 'alias';
//     },
//     transformer: function(prop) {
//         return `token-${prop.name}`;
//     }
// });

StyleDictionaryPackage.registerTransform({
  name: 'size/pxToPt',
  type: 'value',
  matcher: function (prop) {
    return prop.value.match(/^[\d.]+px$/);
  },
  transformer: function (prop) {
    return prop.value.replace(/px$/, 'pt');
  },
});

StyleDictionaryPackage.registerTransform({
  name: 'size/pxToDp',
  type: 'value',
  matcher: function (prop) {
    return prop.value.match(/^[\d.]+px$/);
  },
  transformer: function (prop) {
    return prop.value.replace(/px$/, 'dp');
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

StyleDictionaryPackage.registerTransformGroup({
  name: 'tokens-ios',
  // to see the pre-defined "ios" transformation use: console.log(StyleDictionaryPackage.transformGroup['ios']);
  transforms: ['attribute/cti', 'name/cti/camel', 'size/pxToPt'],
});

StyleDictionaryPackage.registerTransformGroup({
  name: 'tokens-android',
  // to see the pre-defined "android" transformation use: console.log(StyleDictionaryPackage.transformGroup['android']);
  transforms: ['attribute/cti', 'name/cti/camel', 'size/pxToDp'],
});

StyleDictionaryPackage.transformGroup['android'];

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
    StyleDictionary.buildPlatform('styleguide');

    console.log('\nEnd processing');
  });
});

console.log('\n==============================================');
console.log('\nBuild completed!');
