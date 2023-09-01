/**
 * @许可信息
 * @license
 * ITSI https://github.com/Tangcuyu/lds-design-tokens.git
 * Copyright (c) 2022 ITSI Information Technology Ltd.,
 * 
 * 版本号：0.0.1
 * Do not edit directly
 * Generated on Wed, 23 Aug 2023 00:41:37 GMT
 * Build hash 99914b932bd37a50b983c5e7c90ae93b
 */

module.exports = {
  "alias": {
    "color": {
      "brand": {
        "primary": {
          "value": "#1DA1F2",
          "type": "color",
          "filePath": "src/brands/emergency/color.json",
          "isSource": true,
          "original": {
            "value": "#1DA1F2",
            "type": "color"
          },
          "name": "LDS_ALIAS_COLOR_BRAND_PRIMARY",
          "attributes": {},
          "path": [
            "alias",
            "color",
            "brand",
            "primary"
          ]
        },
        "secondary": {
          "value": "#AAB8C2",
          "type": "color",
          "filePath": "src/brands/emergency/color.json",
          "isSource": true,
          "original": {
            "value": "#AAB8C2",
            "type": "color"
          },
          "name": "LDS_ALIAS_COLOR_BRAND_SECONDARY",
          "attributes": {},
          "path": [
            "alias",
            "color",
            "brand",
            "secondary"
          ]
        }
      }
    }
  },
  "base": {
    "border": {
      "radius": {
        "value": "10px",
        "filePath": "src/globals/base/index.json",
        "isSource": true,
        "original": {
          "value": "10px"
        },
        "name": "LDS_BASE_BORDER_RADIUS",
        "attributes": {},
        "path": [
          "base",
          "border",
          "radius"
        ]
      }
    }
  },
  "color": {
    "primary": {
      "value": "#1DA1F2",
      "type": "color",
      "filePath": "src/globals/color/color-basic.json",
      "isSource": true,
      "original": {
        "value": "{alias.color.brand.primary.value}",
        "type": "color"
      },
      "name": "LDS_COLOR_PRIMARY",
      "attributes": {},
      "path": [
        "color",
        "primary"
      ]
    },
    "secondary": {
      "value": "#AAB8C2",
      "type": "color",
      "filePath": "src/globals/color/color-basic.json",
      "isSource": true,
      "original": {
        "value": "{alias.color.brand.secondary.value}",
        "type": "color"
      },
      "name": "LDS_COLOR_SECONDARY",
      "attributes": {},
      "path": [
        "color",
        "secondary"
      ]
    },
    "green": {
      "value": "#4A8C70",
      "type": "color",
      "comment": "look how this comment will appear in the generated files",
      "filePath": "src/globals/color/color-basic.json",
      "isSource": true,
      "original": {
        "value": "#4A8C70",
        "type": "color",
        "comment": "look how this comment will appear in the generated files"
      },
      "name": "LDS_COLOR_GREEN",
      "attributes": {},
      "path": [
        "color",
        "green"
      ]
    },
    "blue": {
      "value": "#14213D",
      "type": "color",
      "filePath": "src/globals/color/color-basic.json",
      "isSource": true,
      "original": {
        "value": "#14213D",
        "type": "color"
      },
      "name": "LDS_COLOR_BLUE",
      "attributes": {},
      "path": [
        "color",
        "blue"
      ]
    },
    "yellow": {
      "value": "#FCA311",
      "type": "color",
      "filePath": "src/globals/color/color-basic.json",
      "isSource": true,
      "original": {
        "value": "#FCA311",
        "type": "color"
      },
      "name": "LDS_COLOR_YELLOW",
      "attributes": {},
      "path": [
        "color",
        "yellow"
      ]
    },
    "red": {
      "value": "#BF0603",
      "type": "color",
      "filePath": "src/globals/color/color-basic.json",
      "isSource": true,
      "original": {
        "value": "#BF0603",
        "type": "color"
      },
      "name": "LDS_COLOR_RED",
      "attributes": {},
      "path": [
        "color",
        "red"
      ]
    },
    "feature": {
      "chat": {
        "value": "#4A8C70",
        "type": "color",
        "filePath": "src/globals/color/color-features.json",
        "isSource": true,
        "original": {
          "value": "{color.green.value}",
          "type": "color"
        },
        "name": "LDS_COLOR_FEATURE_CHAT",
        "attributes": {},
        "path": [
          "color",
          "feature",
          "chat"
        ]
      },
      "blog": {
        "value": "#14213D",
        "type": "color",
        "filePath": "src/globals/color/color-features.json",
        "isSource": true,
        "original": {
          "value": "{color.blue.value}",
          "type": "color"
        },
        "name": "LDS_COLOR_FEATURE_BLOG",
        "attributes": {},
        "path": [
          "color",
          "feature",
          "blog"
        ]
      },
      "shop": {
        "value": "#FCA311",
        "type": "color",
        "filePath": "src/globals/color/color-features.json",
        "isSource": true,
        "original": {
          "value": "{color.yellow.value}",
          "type": "color"
        },
        "name": "LDS_COLOR_FEATURE_SHOP",
        "attributes": {},
        "path": [
          "color",
          "feature",
          "shop"
        ]
      },
      "settings": {
        "value": "#BF0603",
        "type": "color",
        "filePath": "src/globals/color/color-features.json",
        "isSource": true,
        "original": {
          "value": "{color.red.value}",
          "type": "color"
        },
        "name": "LDS_COLOR_FEATURE_SETTINGS",
        "attributes": {},
        "path": [
          "color",
          "feature",
          "settings"
        ]
      }
    },
    "black": {
      "value": "#000",
      "type": "color",
      "filePath": "src/globals/color/color-grayscale.json",
      "isSource": true,
      "original": {
        "value": "#000",
        "type": "color"
      },
      "name": "LDS_COLOR_BLACK",
      "attributes": {},
      "path": [
        "color",
        "black"
      ]
    },
    "gray_60": {
      "value": "#6a6a6a",
      "type": "color",
      "filePath": "src/globals/color/color-grayscale.json",
      "isSource": true,
      "original": {
        "value": "#6a6a6a",
        "type": "color"
      },
      "name": "LDS_COLOR_GRAY_60",
      "attributes": {},
      "path": [
        "color",
        "gray_60"
      ]
    },
    "gray_40": {
      "value": "#949494",
      "type": "color",
      "filePath": "src/globals/color/color-grayscale.json",
      "isSource": true,
      "original": {
        "value": "#949494",
        "type": "color"
      },
      "name": "LDS_COLOR_GRAY_40",
      "attributes": {},
      "path": [
        "color",
        "gray_40"
      ]
    },
    "gray_24": {
      "value": "#c4c4c4",
      "type": "color",
      "filePath": "src/globals/color/color-grayscale.json",
      "isSource": true,
      "original": {
        "value": "#c4c4c4",
        "type": "color"
      },
      "name": "LDS_COLOR_GRAY_24",
      "attributes": {},
      "path": [
        "color",
        "gray_24"
      ]
    },
    "gray_12": {
      "value": "#e0e0e0",
      "type": "color",
      "filePath": "src/globals/color/color-grayscale.json",
      "isSource": true,
      "original": {
        "value": "#e0e0e0",
        "type": "color"
      },
      "name": "LDS_COLOR_GRAY_12",
      "attributes": {},
      "path": [
        "color",
        "gray_12"
      ]
    },
    "gray_3": {
      "value": "#f6f6f6",
      "type": "color",
      "filePath": "src/globals/color/color-grayscale.json",
      "isSource": true,
      "original": {
        "value": "#f6f6f6",
        "type": "color"
      },
      "name": "LDS_COLOR_GRAY_3",
      "attributes": {},
      "path": [
        "color",
        "gray_3"
      ]
    },
    "action_primary": {
      "value": "#1DA1F2",
      "type": "color",
      "filePath": "src/globals/color/color-others.json",
      "isSource": true,
      "original": {
        "value": "{color.primary.value}",
        "type": "color"
      },
      "name": "LDS_COLOR_ACTION_PRIMARY",
      "attributes": {},
      "path": [
        "color",
        "action_primary"
      ]
    },
    "action_destructive": {
      "value": "#BF0603",
      "type": "color",
      "filePath": "src/globals/color/color-others.json",
      "isSource": true,
      "original": {
        "value": "{color.red.value}",
        "type": "color"
      },
      "name": "LDS_COLOR_ACTION_DESTRUCTIVE",
      "attributes": {},
      "path": [
        "color",
        "action_destructive"
      ]
    },
    "border": {
      "value": "#e0e0e0",
      "type": "color",
      "filePath": "src/globals/color/color-others.json",
      "isSource": true,
      "original": {
        "value": "{color.gray_12.value}",
        "type": "color"
      },
      "name": "LDS_COLOR_BORDER",
      "attributes": {},
      "path": [
        "color",
        "border"
      ]
    },
    "user": {
      "authenticated": {
        "value": "#4A8C70",
        "type": "color",
        "filePath": "src/globals/color/color-others.json",
        "isSource": true,
        "original": {
          "value": "{color.green.value}",
          "type": "color"
        },
        "name": "LDS_COLOR_USER_AUTHENTICATED",
        "attributes": {},
        "path": [
          "color",
          "user",
          "authenticated"
        ]
      },
      "anonymous": {
        "value": "#949494",
        "type": "color",
        "filePath": "src/globals/color/color-others.json",
        "isSource": true,
        "original": {
          "value": "{color.gray_40.value}",
          "type": "color"
        },
        "name": "LDS_COLOR_USER_ANONYMOUS",
        "attributes": {},
        "path": [
          "color",
          "user",
          "anonymous"
        ]
      }
    },
    "social": {
      "facebook": {
        "value": "#4867aa",
        "type": "color",
        "filePath": "src/globals/color/color-socials.json",
        "isSource": true,
        "original": {
          "value": "#4867aa",
          "type": "color"
        },
        "name": "LDS_COLOR_SOCIAL_FACEBOOK",
        "attributes": {},
        "path": [
          "color",
          "social",
          "facebook"
        ]
      },
      "twitter": {
        "value": "#1ab0ff",
        "type": "color",
        "filePath": "src/globals/color/color-socials.json",
        "isSource": true,
        "original": {
          "value": "#1ab0ff",
          "type": "color"
        },
        "name": "LDS_COLOR_SOCIAL_TWITTER",
        "attributes": {},
        "path": [
          "color",
          "social",
          "twitter"
        ]
      },
      "vkontakte": {
        "value": "#507299",
        "type": "color",
        "filePath": "src/globals/color/color-socials.json",
        "isSource": true,
        "original": {
          "value": "#507299",
          "type": "color"
        },
        "name": "LDS_COLOR_SOCIAL_VKONTAKTE",
        "attributes": {},
        "path": [
          "color",
          "social",
          "vkontakte"
        ]
      },
      "odnoklassniki": {
        "value": "#ff8201",
        "type": "color",
        "filePath": "src/globals/color/color-socials.json",
        "isSource": true,
        "original": {
          "value": "#ff8201",
          "type": "color"
        },
        "name": "LDS_COLOR_SOCIAL_ODNOKLASSNIKI",
        "attributes": {},
        "path": [
          "color",
          "social",
          "odnoklassniki"
        ]
      },
      "google": {
        "value": "#dc4a3d",
        "type": "color",
        "filePath": "src/globals/color/color-socials.json",
        "isSource": true,
        "original": {
          "value": "#dc4a3d",
          "type": "color"
        },
        "name": "LDS_COLOR_SOCIAL_GOOGLE",
        "attributes": {},
        "path": [
          "color",
          "social",
          "google"
        ]
      },
      "instagram": {
        "value": "#d93175",
        "type": "color",
        "filePath": "src/globals/color/color-socials.json",
        "isSource": true,
        "original": {
          "value": "#d93175",
          "type": "color"
        },
        "name": "LDS_COLOR_SOCIAL_INSTAGRAM",
        "attributes": {},
        "path": [
          "color",
          "social",
          "instagram"
        ]
      },
      "linkedin": {
        "value": "#0076b7",
        "type": "color",
        "filePath": "src/globals/color/color-socials.json",
        "isSource": true,
        "original": {
          "value": "#0076b7",
          "type": "color"
        },
        "name": "LDS_COLOR_SOCIAL_LINKEDIN",
        "attributes": {},
        "path": [
          "color",
          "social",
          "linkedin"
        ]
      }
    }
  },
  "spacing": {
    "xsm": {
      "value": "4px",
      "filePath": "src/globals/spacing/index.json",
      "isSource": true,
      "original": {
        "value": "4px"
      },
      "name": "LDS_SPACING_XSM",
      "attributes": {},
      "path": [
        "spacing",
        "xsm"
      ]
    },
    "sm": {
      "value": "8px",
      "filePath": "src/globals/spacing/index.json",
      "isSource": true,
      "original": {
        "value": "8px"
      },
      "name": "LDS_SPACING_SM",
      "attributes": {},
      "path": [
        "spacing",
        "sm"
      ]
    },
    "md": {
      "value": "12px",
      "filePath": "src/globals/spacing/index.json",
      "isSource": true,
      "original": {
        "value": "12px"
      },
      "name": "LDS_SPACING_MD",
      "attributes": {},
      "path": [
        "spacing",
        "md"
      ]
    },
    "lg": {
      "value": "16px",
      "filePath": "src/globals/spacing/index.json",
      "isSource": true,
      "original": {
        "value": "16px"
      },
      "name": "LDS_SPACING_LG",
      "attributes": {},
      "path": [
        "spacing",
        "lg"
      ]
    },
    "xlg": {
      "value": "24px",
      "filePath": "src/globals/spacing/index.json",
      "isSource": true,
      "original": {
        "value": "24px"
      },
      "name": "LDS_SPACING_XLG",
      "attributes": {},
      "path": [
        "spacing",
        "xlg"
      ]
    },
    "xxlg": {
      "value": "32px",
      "filePath": "src/globals/spacing/index.json",
      "isSource": true,
      "original": {
        "value": "32px"
      },
      "name": "LDS_SPACING_XXLG",
      "attributes": {},
      "path": [
        "spacing",
        "xxlg"
      ]
    },
    "gutter": {
      "value": "16px",
      "filePath": "src/globals/spacing/index.json",
      "isSource": true,
      "original": {
        "value": "{spacing.lg.value}"
      },
      "name": "LDS_SPACING_GUTTER",
      "attributes": {},
      "path": [
        "spacing",
        "gutter"
      ]
    }
  },
  "font_size": {
    "header_1": {
      "value": "22px",
      "category": "typography",
      "filePath": "src/globals/typography/index.json",
      "isSource": true,
      "original": {
        "value": "22px",
        "category": "typography"
      },
      "name": "LDS_FONT_SIZE_HEADER_1",
      "attributes": {},
      "path": [
        "font_size",
        "header_1"
      ]
    },
    "header_2": {
      "value": "20px",
      "category": "typography",
      "filePath": "src/globals/typography/index.json",
      "isSource": true,
      "original": {
        "value": "20px",
        "category": "typography"
      },
      "name": "LDS_FONT_SIZE_HEADER_2",
      "attributes": {},
      "path": [
        "font_size",
        "header_2"
      ]
    },
    "title": {
      "value": "18px",
      "category": "typography",
      "filePath": "src/globals/typography/index.json",
      "isSource": true,
      "original": {
        "value": "18px",
        "category": "typography"
      },
      "name": "LDS_FONT_SIZE_TITLE",
      "attributes": {},
      "path": [
        "font_size",
        "title"
      ]
    },
    "paragraph_1": {
      "value": "16px",
      "category": "typography",
      "filePath": "src/globals/typography/index.json",
      "isSource": true,
      "original": {
        "value": "16px",
        "category": "typography"
      },
      "name": "LDS_FONT_SIZE_PARAGRAPH_1",
      "attributes": {},
      "path": [
        "font_size",
        "paragraph_1"
      ]
    },
    "paragraph_2": {
      "value": "15px",
      "category": "typography",
      "filePath": "src/globals/typography/index.json",
      "isSource": true,
      "original": {
        "value": "15px",
        "category": "typography"
      },
      "name": "LDS_FONT_SIZE_PARAGRAPH_2",
      "attributes": {},
      "path": [
        "font_size",
        "paragraph_2"
      ]
    }
  },
  "line_height": {
    "header_1": {
      "value": "28px",
      "category": "typography",
      "filePath": "src/globals/typography/index.json",
      "isSource": true,
      "original": {
        "value": "28px",
        "category": "typography"
      },
      "name": "LDS_LINE_HEIGHT_HEADER_1",
      "attributes": {},
      "path": [
        "line_height",
        "header_1"
      ]
    },
    "header_2": {
      "value": "25px",
      "category": "typography",
      "filePath": "src/globals/typography/index.json",
      "isSource": true,
      "original": {
        "value": "25px",
        "category": "typography"
      },
      "name": "LDS_LINE_HEIGHT_HEADER_2",
      "attributes": {},
      "path": [
        "line_height",
        "header_2"
      ]
    },
    "title": {
      "value": "24px",
      "category": "typography",
      "filePath": "src/globals/typography/index.json",
      "isSource": true,
      "original": {
        "value": "24px",
        "category": "typography"
      },
      "name": "LDS_LINE_HEIGHT_TITLE",
      "attributes": {},
      "path": [
        "line_height",
        "title"
      ]
    },
    "paragraph_1": {
      "value": "22px",
      "category": "typography",
      "filePath": "src/globals/typography/index.json",
      "isSource": true,
      "original": {
        "value": "22px",
        "category": "typography"
      },
      "name": "LDS_LINE_HEIGHT_PARAGRAPH_1",
      "attributes": {},
      "path": [
        "line_height",
        "paragraph_1"
      ]
    },
    "paragraph_2": {
      "value": "20px",
      "category": "typography",
      "filePath": "src/globals/typography/index.json",
      "isSource": true,
      "original": {
        "value": "20px",
        "category": "typography"
      },
      "name": "LDS_LINE_HEIGHT_PARAGRAPH_2",
      "attributes": {},
      "path": [
        "line_height",
        "paragraph_2"
      ]
    }
  },
  "button": {
    "height": {
      "value": "44px",
      "filePath": "src/platforms/web/button.json",
      "isSource": true,
      "original": {
        "value": "44px"
      },
      "name": "LDS_BUTTON_HEIGHT",
      "attributes": {},
      "path": [
        "button",
        "height"
      ]
    },
    "height_small": {
      "value": "40px",
      "filePath": "src/platforms/web/button.json",
      "isSource": true,
      "original": {
        "value": "40px"
      },
      "name": "LDS_BUTTON_HEIGHT_SMALL",
      "attributes": {},
      "path": [
        "button",
        "height_small"
      ]
    }
  },
  "input": {
    "toolbar": {
      "height": {
        "value": "44px",
        "filePath": "src/platforms/web/input.json",
        "isSource": true,
        "original": {
          "value": "44px"
        },
        "name": "LDS_INPUT_TOOLBAR_HEIGHT",
        "attributes": {},
        "path": [
          "input",
          "toolbar",
          "height"
        ]
      },
      "item_gap": {
        "value": "0px",
        "filePath": "src/platforms/web/input.json",
        "isSource": true,
        "original": {
          "value": "0px"
        },
        "name": "LDS_INPUT_TOOLBAR_ITEM_GAP",
        "attributes": {},
        "path": [
          "input",
          "toolbar",
          "item_gap"
        ]
      },
      "send_icon_size": {
        "value": "32px",
        "filePath": "src/platforms/web/input.json",
        "isSource": true,
        "original": {
          "value": "32px"
        },
        "name": "LDS_INPUT_TOOLBAR_SEND_ICON_SIZE",
        "attributes": {},
        "path": [
          "input",
          "toolbar",
          "send_icon_size"
        ]
      }
    },
    "switcher": {
      "item_size": {
        "value": "40px",
        "filePath": "src/platforms/web/input.json",
        "isSource": true,
        "original": {
          "value": "40px"
        },
        "name": "LDS_INPUT_SWITCHER_ITEM_SIZE",
        "attributes": {},
        "path": [
          "input",
          "switcher",
          "item_size"
        ]
      },
      "icon_size": {
        "value": "24px",
        "filePath": "src/platforms/web/input.json",
        "isSource": true,
        "original": {
          "value": "24px"
        },
        "name": "LDS_INPUT_SWITCHER_ICON_SIZE",
        "attributes": {},
        "path": [
          "input",
          "switcher",
          "icon_size"
        ]
      }
    },
    "mini": {
      "height": {
        "value": "36px",
        "filePath": "src/platforms/web/input.json",
        "isSource": true,
        "original": {
          "value": "36px"
        },
        "name": "LDS_INPUT_MINI_HEIGHT",
        "attributes": {},
        "path": [
          "input",
          "mini",
          "height"
        ]
      },
      "send_icon_size": {
        "value": "32px",
        "filePath": "src/platforms/web/input.json",
        "isSource": true,
        "original": {
          "value": "32px"
        },
        "name": "LDS_INPUT_MINI_SEND_ICON_SIZE",
        "attributes": {},
        "path": [
          "input",
          "mini",
          "send_icon_size"
        ]
      }
    }
  },
  "login": {
    "button_height": {
      "value": "48px",
      "filePath": "src/platforms/web/login.json",
      "isSource": true,
      "original": {
        "value": "48px"
      },
      "name": "LDS_LOGIN_BUTTON_HEIGHT",
      "attributes": {},
      "path": [
        "login",
        "button_height"
      ]
    }
  },
  "font_family": {
    "system": {
      "value": "-apple-system, 'San Francisco', 'Helvetica Neue', 'Segoe WP', 'Segoe UI', Roboto, sans-serif",
      "category": "typography",
      "filePath": "src/platforms/web/typography.json",
      "isSource": true,
      "original": {
        "value": "-apple-system, 'San Francisco', 'Helvetica Neue', 'Segoe WP', 'Segoe UI', Roboto, sans-serif",
        "category": "typography"
      },
      "name": "LDS_FONT_FAMILY_SYSTEM",
      "attributes": {},
      "path": [
        "font_family",
        "system"
      ]
    },
    "custom": {
      "value": "'Uni Neue', sans-serif",
      "category": "typography",
      "filePath": "src/platforms/web/typography.json",
      "isSource": true,
      "original": {
        "value": "'Uni Neue', sans-serif",
        "category": "typography"
      },
      "name": "LDS_FONT_FAMILY_CUSTOM",
      "attributes": {},
      "path": [
        "font_family",
        "custom"
      ]
    }
  }
};