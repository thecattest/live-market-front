module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['jest'],
  globals: {
    /*
      store/invoices.js (vuex)

      $nuxt.$router.push({
        path: $nuxt.$route.path,
        query: {
          ...nonGridQueryData,
          ...query,
        },
      });
      */
    $nuxt: true,
  },

  rules: {
    'no-plusplus': 'off',
    /*
      const id = this.data.id;

      Said that in this case it is necessary to apply destructuring
    */
    'prefer-destructuring': 'off',
    /*
      .find((data) => data.id === storData.id);
      Better than
      .find(data => data.id === storData.id);

      Brackets around a single parameter of the arrow function are required.
      It’s easier to identify function by looking through the code
    */
    'arrow-parens': ['error', 'always'],
    /*
      mixins: [vueComponentReset(() => ({**error here**
        iconName: 'menu',
        iconText: 'menu',
      }))],
    */
    'arrow-body-style': 'off',
    // was conflicting with prettier in template and object literals
    indent: 'off',
    // using only named export for index.js kind of files that exports many
    // helpers/etc for vscode autocomplete and stuff
    // https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/
    'import/prefer-default-export': 'off',
    // 80 chars limit taken from google style guide
    'max-len': [
      'error',
      80,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: [],
        /*
          this._resetKey(key);
        */
        allowAfterThis: true,
        allowAfterSuper: false,
        /*
          using underscores for internal mixin functions

          reset(key) {
            ...
            this._resetKey(key),
            ...
          },
          _resetKey(key) {
            ...
          },
        */
        enforceInMethodNames: false,
      },
    ],
    /*
      import { getPathForConcat } from '@/helpers';

      export function redirectToSubPage(fullPath, subPageName) {
        return ({ route, redirect }Ц) => {
          if (
            route.fullPath === fullPath ||
            route.fullPath === `${fullPath}/`
          ) {
            return redirect(`${
              getPathForConcat(route.fullPath)}${subPageName}
            `);
          }
        };
      }

      `Expected to return a value at the end of arrow function`
    */
    'consistent-return': 'off',
    /* components/FilterSortModal.vue
      import Modal from './Modal';

      `Missing file extension "vue" for "./Modal"`
    */
    // debug with console statements
    'no-console': ['error'],

    'import/extensions': 'off',
    /*
      import Vue from 'vue'; <--
      import { Select2 } from 'select2-vue-component';

      Vue.component('Select2', Select2);

      `'vue' should be listed in the project's dependencies`
    */
    'import/no-extraneous-dependencies': 'off',
    /*
      <component
        :is='RptCartItem'
        v-for='data in cartItemsData'
        :cartItemsData='cartItemsData'
      />

      Input parameters are properties of the object, and the spelling of
      their names in camelCase is generally accepted. SFC also allows you to
      write attributes in camelCase. Said that you need to write them
      through a dash
    */
    'vue/attribute-hyphenation': 'off',
    'vue/script-indent': [
      'error',
      2,
      {
        /*
          <script>
            export default {};
          </script>

          Instead of

          <script>
          export default {};
          </script>
        */
        baseIndent: 1,
        ignores: [':expression'],
      },
    ],

    'vue/html-self-closing': [
      'error',
      {
        html: {
          /*
            <a
              href='##'
              class='link-mask'
            ></a>

            In order not to convert tags of some elements after
            autocompletion to self-closing once again
          */
          normal: 'never',
          void: 'always',
        },
        /*
          <svg>
            <use></use>
          </svg>

          Said that use should be self-closing
        */
        svg: 'never',
      },
    ],
  },

  overrides: [
    {
      files: ['./store/**/*.js'],
      rules: {
        /*
          const store = new Vuex.Store({
            state: {
              count: 1
            },
            mutations: {
              increment(state) {
                // changing state
                state.count++; <-- `
                  Assignment to property of function parameter 'state'
                `
              }
            }
          });
        */
        'no-param-reassign': 'off',
        'no-shadow': ['error', { allow: ['state'] }],
      },
    },
  ],
  settings: {
    'import/resolver': {
      /* layouts/default.vue
        import Header from '@/components/Header';

        `Unable to resolve path to module '@/components/Header'`
      */
      nuxt: {},
    },
  },
};
