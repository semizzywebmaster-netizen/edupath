
import type { Course } from '@/types'
export const mockCourses: Course[] = [
  { id: '1', title: 'WAEC Mathematics Mastery', slug: 'waec-maths', description: 'Complete WAEC syllabus coverage with AI practice', subject: 'Mathematics', level: 'senior_secondary', difficulty: 'intermediate', progress: 45, thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400', duration: '12h', lessonsCount: 48 },
  { id: '2', title: 'JAMB English Intensive', slug: 'jamb-english', description: 'Ace JAMB Use of English with past questions', subject: 'English', level: 'senior_secondary', difficulty: 'beginner', progress: 20, thumbnail: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400', duration: '10h', lessonsCount: 32 },
  { id: '3', title: 'Physics for Senior Secondary', slug: 'physics-ss', description: 'From mechanics to modern physics', subject: 'Physics', level: 'senior_secondary', difficulty: 'advanced', progress: 0, thumbnail: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf9a?w=400', duration: '18h', lessonsCount: 60 },
  { id: '4', title: 'Biology Simplified', slug: 'biology', description: 'Visual learning with diagrams', subject: 'Biology', level: 'senior_secondary', difficulty: 'beginner', progress: 75, thumbnail: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400', duration: '14h', lessonsCount: 40 },
]
