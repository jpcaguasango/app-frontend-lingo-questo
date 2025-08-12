import type {
  ChatItemType,
  ConfigHelpItemType, ConversationType,
  LabelTextType,
  MenuItemType, PracticeType,
} from '@/types/global'

export const menuItems: MenuItemType[] = [
  { title: 'Estudiantes', icon: 'mdi-home', to: '/' },
  { title: 'Chat de Voz', icon: 'mdi-chat', to: '/voice-chat' },
]

export const performanceMetrics: LabelTextType[] = [
  {
    icon: 'mdi-clock-time-eight-outline',
    label: 'Duración total',
    text: '3 Min',
  },
  {
    icon: 'mdi-microphone',
    label: 'Tiempo hablando',
    text: '1 Min',
  },
  {
    icon: 'mdi-message-badge-outline',
    label: 'Mensajes',
    text: '9',
  },
  {
    icon: 'mdi-account-tie-voice-outline',
    label: 'Palabras/Min',
    text: '89',
  },
]

export const statePractices: LabelTextType[] = [
  {
    icon: 'mdi-email-outline',
    label: 'Palabras practicadas',
    text: '4 Palabras',
  },
  {
    icon: 'mdi-format-text',
    label: 'Frases practicadas',
    text: '5 Frases',
  },
  {
    icon: 'mdi-message-check-outline',
    label: 'Conversación',
    text: '9 Mensajes',
  },
  {
    icon: 'mdi-star-outline',
    label: 'Puntaje general',
    text: '89%',
  },
]

export const configHelps: ConfigHelpItemType[] = [
  {
    label: 'View transcription',
    unlimited: true,
  },
  {
    label: 'View suggestions',
    unlimited: true,
  },
  {
    label: 'View Translation',
    unlimited: true,
  },
  {
    label: 'View Use Native_language',
    unlimited: true,
  },
  {
    label: 'View Description',
    unlimited: true,
  },
  {
    label: 'View Rubrics',
    unlimited: false,
  },
]

export const practicedWords: PracticeType[] = [
  {
    title: 'Experience',
    result: {
      title: 'Experience',
      score: 89,
      date: '07/06/2025',
    },
  },
  {
    title: 'Skills',
    result: {
      title: 'Abilities',
      score: 53,
      date: '07/06/2025',
    },
  },
  {
    title: 'Interview',
    result: {
      title: 'Interview',
      score: 70,
      date: '07/06/2025',
    },
  },
  {
    title: 'Startup',
    result: {
      title: 'Startup',
      score: 82,
      date: '07/06/2025',
    },
  },
]

export const practicedPhrases: PracticeType[] = [
  {
    title: 'I think entrepreneurs need to be creative and flexible.',
    result: {
      title: 'I think the startup people need to be creative and flexible.',
      score: 89,
      date: '07/06/2025',
    },
  },
  {
    title: 'My skills include communication and problem-solving.',
    result: {
      title:
        'My speaking abilities include communication and resolution of problems.',
      score: 53,
      date: '07/06/2025',
    },
  },
  {
    title: 'I am very motivated and eager to learn new things.',
    result: {
      title: 'Im very motivated and anxious to learn new things.',
      score: 70,
      date: '07/06/2025',
    },
  },
  {
    title: 'I believe that a good startup should solve a real problem.',
    result: {
      title: 'I think a good startup should resolve real problems.',
      score: 82,
      date: '07/06/2025',
    },
  },
  {
    title: 'I have experience in project management and teamwork.\n',
    result: {
      title: 'I have experience in managing projects and teamwork.\n',
      score: 82,
      date: '07/06/2025',
    },
  },
]

export const conversationMetrics: LabelTextType[] = [
  {
    icon: 'mdi-message-check-outline',
    label: 'Total de mensajes',
    text: '9',
  },
  {
    icon: 'mdi-account-tie-voice-outline',
    label: 'Mensajes del estudiante',
    text: '5',
  },
  {
    icon: 'mdi-clock-time-eight-outline',
    label: 'Duración total',
    text: '3 Min',
  },
  {
    icon: 'mdi-microphone-settings',
    label: 'Duración del estudiante',
    text: '1 Min',
  },
]

export const conversationRating: ConversationType[] = [
  {
    icon: 'mdi-progress-clock',
    label: 'General',
    value: 80,
    errors: 3,
  },
  {
    icon: 'mdi-volume-high',
    label: 'Pronunciación',
    value: 90,
    errors: 1,
  },
  {
    icon: 'mdi-chat-outline',
    label: 'Cohesión',
    value: 100,
    errors: 0,
  },
  {
    icon: 'mdi-book-open-variant-outline',
    label: 'Vocabulario',
    value: 100,
    errors: 0,
  },
  {
    icon: 'mdi-text-search',
    label: 'Gramática',
    value: 100,
    errors: 0,
  },
  {
    icon: 'mdi-chat-outline',
    label: 'Fluidez',
    value: 100,
    errors: 0,
  },
]

export const chatItems: ChatItemType[] = [
  {
    author: 'Interviewer',
    message: `I see you're testing! 😊 But let’s stay focused on our
              interview. Can you tell me about a challenge you faced
              during your projects and how you overcame it? 💪🚀 -
              ¡Veo que estás probando! 😊 Pero mantengámonos
              enfocados en nuestra entrevista. ¿Puedes contarme
              sobre un desafío que enfrentaste durante tus proyectos
              y cómo lo superaste? 💪🚀`,
    duration: '00:09',
    hour: '12:00 pm',
  },
  {
    author: 'Interviewee',
    message: `Hello, test, test.`,
    duration: '00:02',
    hour: '12:03 pm',
  },
  {
    author: 'Interviewer',
    message: `Great approach! 📊💬 User feedback is key! How did that feedback influence your next steps? Did you make any big changes based on what users said? 😊🔄 - ¡Gran enfoque! 📊💬 ¡La retroalimentación de los usuarios es clave! ¿Cómo influyó esa retroalimentación en tus próximos pasos? ¿Hiciste algún cambio importante basado en lo que dijeron los usuarios? 😊🔄`,
    duration: '00:02',
    hour: '12:03 pm',
  },
  {
    author: 'Interviewee',
    message: `We do a lot of interviews and questionnaires, and then we had metrics within the app that would gather how much they were practicing and their progress over time.`,
    duration: '00:10',
    hour: '12:03 pm',
  },
]
