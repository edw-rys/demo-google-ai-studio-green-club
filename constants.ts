import { User, Reward, Level, Transaction, Promo, QuickAction, Screen, Redemption, FaqItem } from './types';
import { HistoryIcon, GiftIcon, MaterialsIcon, BenefitsIcon } from './components/icons';

export const COLORS = {
  primary: '#2E7D32',
  secondary: '#A5D6A7',
  accent: '#FB8C00',
  neutral: '#ECEFF1',
  text: '#263238',
};

export const MOCK_USER: User = {
  name: 'David',
  firstName: 'David',
  lastName: 'Alava',
  idNumber: '1234567890',
  email: 'david@example.com',
  points: 700,
  level: Level.Silver,
  avatarUrl: 'https://i.pravatar.cc/150?u=david-alava'
};

export const REWARDS: Reward[] = [
  { id: 1, name: 'Airfryer', points: 400, imageUrl: 'https://picsum.photos/seed/airfryer/400/400', category: 'Hogar', description: 'Freidora de aire de última generación para cocinar de forma más saludable. Capacidad de 5 litros.' },
  { id: 2, name: 'Parlante JBL', points: 300, imageUrl: 'https://picsum.photos/seed/jbl/400/400', category: 'Tecnología', description: 'Altavoz Bluetooth portátil con sonido potente y batería de larga duración. Resistente al agua.' },
  { id: 3, name: 'Smartwatch', points: 500, imageUrl: 'https://picsum.photos/seed/watch/400/400', category: 'Tecnología', description: 'Reloj inteligente con monitor de frecuencia cardíaca, GPS y notificaciones de tu smartphone.' },
  { id: 4, name: 'Termo metalizado', points: 150, imageUrl: 'https://picsum.photos/seed/thermos/400/400', category: 'Accesorios', description: 'Termo de acero inoxidable que mantiene tus bebidas frías o calientes por horas.' },
  { id: 5, name: 'Mouse inalámbrico', points: 200, imageUrl: 'https://picsum.photos/seed/mouse/400/400', category: 'Tecnología', description: 'Mouse ergonómico inalámbrico con conexión Bluetooth y USB. Ideal para trabajar cómodamente.' },
  { id: 6, name: 'Tablet', points: 800, imageUrl: 'https://picsum.photos/seed/tablet/400/400', category: 'Tecnología', description: 'Tablet de 10 pulgadas con pantalla Full HD, ideal para entretenimiento y productividad.' },
];

export const MOCK_TRANSACTIONS: Transaction[] = [
    { id: 't1', description: 'Factura #123-ABC', points: 25, timestamp: 'Hoy 10:24' },
    { id: 't2', description: 'Canje: Mouse Inalámbrico', points: -200, timestamp: 'Ayer 15:30' },
    { id: 't3', description: 'Factura #456-DEF', points: 50, timestamp: 'Hace 3 días' },
    { id: 't4', description: 'Bono de bienvenida', points: 100, timestamp: 'Hace 1 semana' },
    { id: 't5', description: 'Factura #789-GHI', points: 35, timestamp: 'Hace 2 semanas' },
];

export const MOCK_PROMOS: Promo[] = [
    { id: 'p1', title: 'x2 puntos este fin de semana', tag: 'Tiempo limitado', bgColor: 'bg-orange-400' },
    { id: 'p2', title: '+50 puntos por tus primeras 3 facturas', tag: 'Nuevo', bgColor: 'bg-teal-400' },
    { id: 'p3', title: 'Canjea un Smartwatch y obtén 10% de descuento', tag: 'Oferta', bgColor: 'bg-indigo-400' },
];

export const MOCK_QUICK_ACTIONS: QuickAction[] = [
    { id: 'qa1', label: 'Historial de puntos', icon: HistoryIcon, screen: Screen.PointsHistory },
    { id: 'qa2', label: 'Mis canjes', icon: GiftIcon, screen: Screen.MyRedemptions },
    { id: 'qa3', label: 'Materiales', icon: MaterialsIcon, locked: MOCK_USER.level === Level.Bronze, levelRequired: Level.Silver, screen: Screen.Materials },
    { id: 'qa4', label: 'Beneficios', icon: BenefitsIcon, screen: Screen.Benefits },
];

export const LEVEL_DATA = {
  [Level.Bronze]: { nextLevel: Level.Silver, goal: 500, conversion: '20 ctvs' },
  [Level.Silver]: { nextLevel: Level.Gold, goal: 1000, conversion: '10 ctvs' },
  [Level.Gold]: { goal: 2000, conversion: '5 ctvs' },
};

export const MOCK_REDEMPTIONS: Redemption[] = [
    { id: 'r1', reward: REWARDS[4], timestamp: 'Ayer 15:30', status: 'Retirado', code: 'GRC-12345' },
    { id: 'r2', reward: REWARDS[1], timestamp: 'Hace 1 semana', status: 'Confirmado', code: 'GRC-67890' },
    { id: 'r3', reward: REWARDS[3], timestamp: 'Hace 2 semanas', status: 'Pendiente', code: 'GRC-11223' },
];

export const MOCK_FAQS: FaqItem[] = [
    { question: '¿Cómo escaneo una factura?', answer: 'Ve a la pantalla de inicio y presiona el botón "Escanear factura". Centra el código QR o de barras de tu factura en el recuadro de la cámara y la app lo leerá automáticamente.' },
    { question: '¿Qué hago si el código falla?', answer: 'Si un código es inválido o ya fue usado, la app te lo notificará. Asegúrate de que la factura sea reciente y el código sea legible. Si el problema persiste, puedes contactar a soporte desde la sección "Contáctanos" en tu perfil.' },
    { question: '¿Cómo canjeo un premio?', answer: 'Navega a la sección "Recompensas", selecciona el premio que deseas y presiona "Canjear premio". Se te mostrará una confirmación. Una vez confirmado, tus puntos serán descontados y recibirás un comprobante con un código para retirar tu premio.' },
    { question: '¿Los puntos expiran?', answer: 'No, tus Green Points no tienen fecha de vencimiento. Puedes acumularlos todo el tiempo que desees.' },
];