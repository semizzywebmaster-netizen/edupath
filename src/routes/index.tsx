
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { PublicLayout } from '@/layouts/PublicLayout'
import { AuthLayout } from '@/layouts/AuthLayout'
import { AppLayout } from '@/layouts/AppLayout'
import { HomePage } from '@/pages/public/HomePage'
import { AboutPage } from '@/pages/public/AboutPage'
import { FeaturesPage } from '@/pages/public/FeaturesPage'
import { ForTeachersPage } from '@/pages/public/ForTeachersPage'
import { ForParentsPage } from '@/pages/public/ForParentsPage'
import { ForSchoolsPage } from '@/pages/public/ForSchoolsPage'
import { ExamPrepPage } from '@/pages/public/ExamPrepPage'
import { CareersPage } from '@/pages/public/CareersPage'
import { PricingPage } from '@/pages/public/PricingPage'
import { FaqPage } from '@/pages/public/FaqPage'
import { ContactPage } from '@/pages/public/ContactPage'
import { AiLearningPage } from '@/pages/public/AiLearningPage'
import { AiTutorPage } from '@/pages/public/AiTutorPage'
import { AiStudyCoachPage } from '@/pages/public/AiStudyCoachPage'
import { AiSnapToSolvePage } from '@/pages/public/AiSnapToSolvePage'
import { AiStudyToolsPage } from '@/pages/public/AiStudyToolsPage'
import { PrivacyPage } from '@/pages/legal/PrivacyPage'
import { TermsPage } from '@/pages/legal/TermsPage'
import { CookiesPage } from '@/pages/legal/CookiesPage'

import { LoginPage } from '@/pages/auth/LoginPage'
import { RegisterPage } from '@/pages/auth/RegisterPage'
import { VerifyPage } from '@/pages/auth/VerifyPage'
import { ForgotPasswordPage } from '@/pages/auth/ForgotPasswordPage'
import { ResetPasswordPage } from '@/pages/auth/ResetPasswordPage'
import { ChangePasswordPage } from '@/pages/auth/ChangePasswordPage'
import { LogoutPage } from '@/pages/auth/LogoutPage'

import { OnboardingPage } from '@/pages/app/OnboardingPage'
import { OnboardingCountryPage } from '@/pages/app/OnboardingCountryPage'
import { DashboardPage } from '@/pages/app/DashboardPage'
import { LearningPage } from '@/pages/app/LearningPage'
import { CoursesPage } from '@/pages/app/CoursesPage'
import { CourseDetailPage } from '@/pages/app/CourseDetailPage'
import { SubjectsPage, SubjectDetailPage } from '@/pages/app/SubjectsPage'
import { PracticePage } from '@/pages/app/PracticePage'
import { ProgressPage } from '@/pages/app/ProgressPage'
import { RecommendationsPage, GoalsPage } from '@/pages/app/RecommendationsPage'
import { ProfilePage, SettingsPage } from '@/pages/app/ProfilePage'
import { AiHubPage } from '@/pages/app/AiHubPage'
import { AiTutorPage as AppAiTutorPage } from '@/pages/app/AiTutorPage'
import { AiStudyCoachPage as AppAiStudyCoachPage } from '@/pages/app/AiStudyCoachPage'
import { AiSnapToSolvePage as AppAiSnapPage } from '@/pages/app/AiSnapToSolvePage'
import { AiNotesPage } from '@/pages/app/AiNotesPage'
import { AiFlashcardsPage } from '@/pages/app/AiFlashcardsPage'
import { AiMindMapPage } from '@/pages/app/AiMindMapPage'
import { AiQuizGeneratorPage } from '@/pages/app/AiQuizGeneratorPage'
import { AiMockExamPage } from '@/pages/app/AiMockExamPage'
import { LearningBrainPage } from '@/pages/app/LearningBrainPage'
import { CreditsPage } from '@/pages/app/CreditsPage'
import { ReferralsPage, RewardsPage } from '@/pages/app/GamificationPage'
import { NotificationsPage } from '@/pages/app/NotificationsPage'

import { TeacherDashboardPage } from '@/pages/teacher/TeacherDashboardPage'
import { ExamPlatformPage } from '@/pages/exam/ExamPlatformPage'
import { BooksPage } from '@/pages/books/BooksPage'
import { CommunityFeedPage } from '@/pages/community/CommunityFeedPage'
import { CareersPage as AppCareersPage } from '@/pages/careers/CareersPage'
import { SearchPage } from '@/pages/search/SearchPage'
import { NotFoundPage } from '@/pages/ErrorPages'

import { ProtectedRoute } from './ProtectedRoute'

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/features', element: <FeaturesPage /> },
      { path: '/for-teachers', element: <ForTeachersPage /> },
      { path: '/for-parents', element: <ForParentsPage /> },
      { path: '/for-schools', element: <ForSchoolsPage /> },
      { path: '/exam-prep', element: <ExamPrepPage /> },
      { path: '/careers', element: <CareersPage /> },
      { path: '/pricing', element: <PricingPage /> },
      { path: '/faq', element: <FaqPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/ai-learning', element: <AiLearningPage /> },
      { path: '/ai-learning/tutor', element: <AiTutorPage /> },
      { path: '/ai-learning/study-coach', element: <AiStudyCoachPage /> },
      { path: '/ai-learning/snap-to-solve', element: <AiSnapToSolvePage /> },
      { path: '/ai-learning/study-tools', element: <AiStudyToolsPage /> },
      { path: '/privacy', element: <PrivacyPage /> },
      { path: '/terms', element: <TermsPage /> },
      { path: '/cookies', element: <CookiesPage /> },
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'verify', element: <VerifyPage /> },
      { path: 'forgot-password', element: <ForgotPasswordPage /> },
      { path: 'reset-password', element: <ResetPasswordPage /> },
      { path: 'change-password', element: <ChangePasswordPage /> },
      { path: 'logout', element: <LogoutPage /> },
    ]
  },
  {
    path: '/app',
    element: <ProtectedRoute><AppLayout /></ProtectedRoute>,
    children: [
      { index: true, element: <Navigate to="/app/dashboard" replace /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'onboarding', element: <OnboardingPage /> },
      { path: 'onboarding/country', element: <OnboardingCountryPage /> },
      { path: 'onboarding/education-level', element: <OnboardingCountryPage /> },
      { path: 'onboarding/institution-type', element: <OnboardingCountryPage /> },
      { path: 'onboarding/institution', element: <OnboardingCountryPage /> },
      { path: 'onboarding/programme', element: <OnboardingCountryPage /> },
      { path: 'onboarding/class-level', element: <OnboardingCountryPage /> },
      { path: 'onboarding/session', element: <OnboardingCountryPage /> },
      { path: 'onboarding/exams', element: <OnboardingCountryPage /> },
      { path: 'onboarding/goals', element: <OnboardingCountryPage /> },
      { path: 'onboarding/review', element: <OnboardingCountryPage /> },
      { path: 'onboarding/complete', element: <OnboardingCountryPage /> },
      { path: 'learning', element: <LearningPage /> },
      { path: 'courses', element: <CoursesPage /> },
      { path: 'courses/:courseId', element: <CourseDetailPage /> },
      { path: 'subjects', element: <SubjectsPage /> },
      { path: 'subjects/:subjectId', element: <SubjectDetailPage /> },
      { path: 'practice', element: <PracticePage /> },
      { path: 'progress', element: <ProgressPage /> },
      { path: 'recommendations', element: <RecommendationsPage /> },
      { path: 'goals', element: <GoalsPage /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'profile/education', element: <ProfilePage /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: 'ai', element: <AiHubPage /> },
      { path: 'ai/tutor', element: <AppAiTutorPage /> },
      { path: 'ai/study-coach', element: <AppAiStudyCoachPage /> },
      { path: 'ai/snap-to-solve', element: <AppAiSnapPage /> },
      { path: 'ai/notes', element: <AiNotesPage /> },
      { path: 'ai/flashcards', element: <AiFlashcardsPage /> },
      { path: 'ai/mind-map', element: <AiMindMapPage /> },
      { path: 'ai/quiz-generator', element: <AiQuizGeneratorPage /> },
      { path: 'ai/mock-exam', element: <AiMockExamPage /> },
      { path: 'ai/question-generator', element: <AiQuizGeneratorPage /> },
      { path: 'ai/quiz', element: <AiQuizGeneratorPage /> },
      { path: 'ai/practice', element: <AiQuizGeneratorPage /> },
      { path: 'ai/study-plan', element: <AiQuizGeneratorPage /> },
      { path: 'ai/summary', element: <AiNotesPage /> },
      { path: 'ai/revision', element: <AiNotesPage /> },
      { path: 'learning-brain', element: <LearningBrainPage /> },
      { path: 'books', element: <BooksPage /> },
      { path: 'books/:bookId', element: <BooksPage /> },
      { path: 'resources', element: <BooksPage /> },
      { path: 'credits', element: <CreditsPage /> },
      { path: 'wallet', element: <CreditsPage /> },
      { path: 'subscriptions', element: <CreditsPage /> },
      { path: 'transactions', element: <CreditsPage /> },
      { path: 'referrals', element: <ReferralsPage /> },
      { path: 'rewards', element: <RewardsPage /> },
      { path: 'gamification', element: <RewardsPage /> },
      { path: 'achievements', element: <RewardsPage /> },
      { path: 'leaderboard', element: <RewardsPage /> },
      { path: 'notifications', element: <NotificationsPage /> },
    ]
  },
  {
    path: '/teacher',
    element: <ProtectedRoute><AppLayout /></ProtectedRoute>,
    children: [
      { index: true, element: <TeacherDashboardPage /> },
      { path: 'dashboard', element: <TeacherDashboardPage /> },
      { path: 'classes', element: <TeacherDashboardPage /> },
      { path: 'students', element: <TeacherDashboardPage /> },
      { path: 'lessons', element: <TeacherDashboardPage /> },
      { path: 'assignments', element: <TeacherDashboardPage /> },
      { path: 'quizzes', element: <TeacherDashboardPage /> },
      { path: 'exams', element: <TeacherDashboardPage /> },
      { path: 'marking', element: <TeacherDashboardPage /> },
      { path: 'analytics', element: <TeacherDashboardPage /> },
      { path: 'ai-assistant', element: <TeacherDashboardPage /> },
      { path: 'settings', element: <TeacherDashboardPage /> },
    ]
  },
  {
    path: '/parent',
    element: <ProtectedRoute><AppLayout /></ProtectedRoute>,
    children: [
      { index: true, element: <TeacherDashboardPage /> },
      { path: 'dashboard', element: <TeacherDashboardPage /> },
    ]
  },
  {
    path: '/school',
    element: <ProtectedRoute><AppLayout /></ProtectedRoute>,
    children: [
      { index: true, element: <TeacherDashboardPage /> },
      { path: 'dashboard', element: <TeacherDashboardPage /> },
    ]
  },
  { path: '/community', element: <CommunityFeedPage /> },
  { path: '/community/feed', element: <CommunityFeedPage /> },
  { path: '/search', element: <SearchPage /> },
  { path: '/search/:type', element: <SearchPage /> },
  { path: '/books', element: <BooksPage /> },
  { path: '/exams', element: <ExamPlatformPage /> },
  { path: '/careers/explore', element: <AppCareersPage /> },
  { path: '*', element: <NotFoundPage /> },
])
