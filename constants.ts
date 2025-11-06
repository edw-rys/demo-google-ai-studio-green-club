import { User, Reward, Level, Transaction, Promo, QuickAction, Screen, Redemption, FaqItem, Material } from './types';
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
    { id: 't6', description: 'Canje: Airfryer', points: -400, timestamp: 'Ayer 17:02' },
    { id: 't7', description: 'Factura #JKL-111', points: 105, timestamp: 'Hace 4 días'},
];

export const MOCK_PROMOS: Promo[] = [
    { id: 'p1', title: 'x2 puntos este fin de semana', tag: 'Tiempo limitado', bgColor: 'bg-orange-400' },
    { id: 'p2', title: '+50 puntos por tus primeras 3 facturas', tag: 'Nuevo', bgColor: 'bg-teal-400' },
    { id: 'p3', title: 'Canjea un Smartwatch y obtén 10% de descuento', tag: 'Oferta', bgColor: 'bg-indigo-400' },
];

export const MOCK_QUICK_ACTIONS: QuickAction[] = [
    { id: 'qa1', label: 'Historial de puntos', icon: HistoryIcon, screen: Screen.PointsHistory },
    { id: 'qa2', label: 'Mis canjes', icon: GiftIcon, screen: Screen.MyRedemptions },
    { id: 'qa3', label: 'Materiales', icon: MaterialsIcon, locked: MOCK_USER.level === Level.Bronze, levelRequired: Level.Silver, screen: Screen.MaterialsScreenv2 },
    { id: 'qa4', label: 'Beneficios', icon: BenefitsIcon, screen: Screen.Benefits },
];

export const LEVEL_DATA = {
  [Level.Bronze]: { nextLevel: Level.Silver, goal: 500, conversion: '20 ctvs' },
  [Level.Silver]: { nextLevel: Level.Gold, goal: 1000, conversion: '10 ctvs' },
  [Level.Gold]: { goal: 2000, conversion: '5 ctvs' },
};

export const MOCK_REDEMPTIONS: Redemption[] = [
    { id: 'r1', reward: REWARDS[4], timestamp: 'Ayer 15:30', status: 'Retirado', code: 'GRC-12345' },
    { id: 'r2', reward: REWARDS[1], timestamp: 'Ayer 17:02', status: 'Confirmado', code: 'GRC-67890' },
    { id: 'r3', reward: REWARDS[3], timestamp: 'Hace 2 semanas', status: 'Pendiente', code: 'GRC-11223' },
];

export const MOCK_FAQS: FaqItem[] = [
    { question: '¿Cómo escaneo una factura?', answer: 'Ve a la pantalla de inicio y presiona el botón "Escanear factura". Centra el código QR o de barras de tu factura en el recuadro de la cámara y la app lo leerá automáticamente.' },
    { question: '¿Qué hago si el código falla?', answer: 'Si un código es inválido o ya fue usado, la app te lo notificará. Asegúrate de que la factura sea reciente y el código sea legible. Si el problema persiste, puedes contactar a soporte desde la sección "Contáctanos" en tu perfil.' },
    { question: '¿Cómo canjeo un premio?', answer: 'Navega a la sección "Recompensas", selecciona el premio que deseas y presiona "Canjear premio". Se te mostrará una confirmación. Una vez confirmado, tus puntos serán descontados y recibirás un comprobante con un código para retirar tu premio.' },
    { question: '¿Los puntos expiran?', answer: 'No, tus Green Points no tienen fecha de vencimiento. Puedes acumularlos todo el tiempo que desees.' },
];

export const YOUTUBE_VIDEO_IDS = ["YTv1_ABC123", "YTv2_DEF456", "YTv3_GHI789", "YTv4_JKL012", "YTv5_MNO345"];

export const MOCK_MATERIALS: Material[] = [
    { 
        id: 'm1', 
        type: 'Artículo', 
        title: '5 Tips para Vender Mejor', 
        description: 'Mejora tus técnicas de venta con estos consejos prácticos.', 
        thumbnailUrl: 'https://picsum.photos/seed/article1/400/300',
        content: {
            text: [
                { title: 'Conoce tu producto', body: 'El primer paso para una venta exitosa es conocer a fondo lo que ofreces. Estudia sus características, beneficios y posibles objeciones.' },
                { title: 'Escucha activa', body: 'Presta atención a las necesidades de tu cliente. No se trata de hablar, sino de entender qué problema puedes resolverle.' },
            ],
            images: ['https://picsum.photos/seed/gallery1/600/400', 'https://picsum.photos/seed/gallery2/600/400'],
        },
    },
    { 
        id: 'm2', 
        type: 'Video', 
        title: 'Tutorial de Producto X', 
        description: 'Un video corto que muestra el funcionamiento de nuestro producto estrella.', 
        thumbnailUrl: 'https://picsum.photos/seed/video1/400/300',
    },
    { 
        id: 'm3', 
        type: 'Imagen', 
        title: 'Kit para Redes Sociales', 
        description: 'Imágenes listas para usar en tus publicaciones de Instagram y Facebook.', 
        thumbnailUrl: 'https://picsum.photos/seed/image1/400/300',
        content: {
            text: [],
            images: ['https://picsum.photos/seed/social1/600/400', 'https://picsum.photos/seed/social2/600/400', 'https://picsum.photos/seed/social3/600/400'],
        },
    },
    { 
        id: 'm4', 
        type: 'Video', 
        title: 'Entrevista con Experto', 
        description: 'Conversamos con un líder de la industria sobre las últimas tendencias.', 
        thumbnailUrl: 'https://picsum.photos/seed/video2/400/300',
        levelRequired: Level.Silver,
    },
    { 
        id: 'm5', 
        type: 'Artículo', 
        title: 'Guía Avanzada de Marketing', 
        description: 'Estrategias de marketing digital para llevar tu negocio al siguiente nivel.', 
        thumbnailUrl: 'https://picsum.photos/seed/article2/400/300',
        levelRequired: Level.Gold,
        content: {
            text: [{ title: 'SEO para Emprendedores', body: 'Optimiza tu presencia en buscadores para atraer más clientes.'}],
            images: [],
        }
    },
];