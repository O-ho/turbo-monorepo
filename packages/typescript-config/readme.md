# 🛠️ TypeScript Base Config

This package provides a shared `tsconfig` base used across the monorepo for consistency and strict type-safety.

---

## 📄 `base.json` 설명

> 모든 앱과 패키지는 이 설정을 `extends`하여 일관된 TypeScript 구성을 유지합니다.

### `compilerOptions` 필드

| 옵션 | 설명 |
|------|------|
| `declaration: true` | `.d.ts` 타입 선언 파일을 생성해 다른 패키지에서 사용할 수 있도록 함 |
| `declarationMap: true` | `.d.ts.map` 파일도 함께 생성되어 디버깅에 유용 |
| `esModuleInterop: true` | CommonJS ↔ ESModule 간 `import` 호환성 제공 |
| `incremental: false` | 증분 빌드 비활성화 (전체 새 빌드 수행) |
| `isolatedModules: true` | 각 파일을 독립 모듈처럼 처리 (Babel/SWC 호환 목적) |
| `lib: ["es2022", "DOM", "DOM.Iterable"]` | 사용할 수 있는 JS/DOM API를 명시 |
| `module: "NodeNext"` | 최신 Node.js ESM 호환 모듈 형식 사용 |
| `moduleResolution: "NodeNext"` | 모듈 해석 방식도 NodeNext에 맞춤 |
| `noUncheckedIndexedAccess: true` | 인덱스 접근 시 `undefined` 가능성 체크 |
| `resolveJsonModule: true` | `.json` 파일을 `import`로 사용 가능 |
| `skipLibCheck: true` | `node_modules` 타입 검사를 생략해 속도 개선 |
| `strict: true` | TypeScript 엄격 모드 일괄 적용 |
| `target: "ES2022"` | 트랜스파일 시 사용할 JS 버전 지정 |
| `moduleDetection: "force"` | `export`가 없어도 항상 모듈로 간주 |

---

## 📦 사용 예시

하위 프로젝트의 `tsconfig.json`에서 아래처럼 사용합니다:

```json
{
  "extends": "@repo/typescript-config/base.json"
}
```

---

## 📄 `next.json` 설명

```jsonc
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "./base.json",
  "compilerOptions": {
    "plugins": [{ "name": "next" }],    // Next.js 전용 타입 체크 지원
    "module": "ESNext",                 // 최신 ESM 모듈 형식
    "moduleResolution": "Bundler",      // 번들러 친화적 모듈 해석
    "allowJs": true,                    // JS 파일도 허용
    "jsx": "preserve",                  // JSX 그대로 유지
    "noEmit": true                      // 빌드 시 파일 출력 생략
  }
}
