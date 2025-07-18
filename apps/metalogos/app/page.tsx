import { Button } from '@repo/ui/button'

const Home = () => {
  return (
    <div className={'bg-blue-500 text-3xl'}>
      <span>metalogos 홈 페이지만 변경점</span>
      <Button appName={'metalogos'}>아이이이이이</Button>
      dasdasjk
    </div>
  )
}

export default Home

//  [ -z "$VERCEL_GIT_PREVIOUS_SHA" ] && exit 1; git diff --name-only "$VERCEL_GIT_PREVIOUS_SHA" "$VERCEL_GIT_COMMIT_SHA" | grep -qE '^(apps/metalogos/|packages/|package\.json|pnpm-lock\.yaml)' && exit 1 || exit 0
