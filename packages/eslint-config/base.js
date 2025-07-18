import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import turboPlugin from 'eslint-plugin-turbo'
import tseslint from 'typescript-eslint'
import onlyWarn from 'eslint-plugin-only-warn'

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = [
  js.configs.recommended, // js 기본 규칙
  eslintConfigPrettier, // prettier 와 eslint의 충돌 방지
  ...tseslint.configs.recommended, // typescript 문법 검사 및 규칙 설정
  {
    plugins: {
      turbo: turboPlugin, // turborepo 환경에서 유용한 규칙
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn', // 모든 에러를 경고로 표시 ( ci에서 실패 방지 )
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ['dist/**'],
  },
]
