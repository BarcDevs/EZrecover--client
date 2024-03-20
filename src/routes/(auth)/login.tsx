import { createFileRoute } from '@tanstack/react-router'
import AuthPage from '@/pages/AuthPage.tsx'

export const Route = createFileRoute('/(auth)/login')({
  component: () => <AuthPage type={'login'}/>
})
