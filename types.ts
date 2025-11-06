export enum Level {
  Bronze = 'Hoja de Bronce',
  Silver = 'Hoja de Plata',
  Gold = 'Hoja de Oro',
}

export enum Screen {
  // Main Tabs
  Home = 'Inicio',
  Rewards = 'Recompensas',
  Materials = 'Materiales',
  Profile = 'Mi Perfil',

  // Sub-screens & States
  RewardDetail = 'RewardDetail',
  Scan = 'Scan',
  ScanSuccess = 'ScanSuccess',
  ScanInvalid = 'ScanInvalid',
  ScanUsed = 'ScanUsed',
  PointsHistory = 'PointsHistory',
  MyRedemptions = 'MyRedemptions',
  RedemptionReceipt = 'RedemptionReceipt',
  Benefits = 'Benefits',
  HowItWorks = 'HowItWorks',
  Settings = 'Settings',
  Contact = 'Contact',
  FAQ = 'FAQ',
  SelectGoal = 'SelectGoal',
  AdMaterials = 'AdMaterials',
  EditProfile = 'EditProfile',

  // V2 Screens
  HomeScreenv2 = 'HomeScreenv2',
  RewardDetailv2 = 'RewardDetailv2',
  MaterialsScreenv2 = 'MaterialsScreenv2',
  ProfileScreenv2 = 'ProfileScreenv2',
  MaterialDetail = 'MaterialDetail',
  MaterialVideo = 'MaterialVideo',
}

export interface User {
  name: string;
  email: string;
  points: number;
  level: Level;
  avatarUrl: string;
  firstName?: string;
  lastName?: string;
  idNumber?: string;
}

export interface Reward {
  id: number;
  name: string;
  points: number;
  imageUrl: string;
  category: string;
  description?: string;
}

export interface Transaction {
  id: string;
  description: string;
  points: number;
  timestamp: string;
}

export interface Promo {
  id: string;
  title: string;
  tag: string;
  bgColor: string;
}

export interface QuickAction {
    id: string;
    label: string;
    icon: React.ElementType;
    locked?: boolean;
    levelRequired?: Level;
    screen: Screen;
}

export interface Redemption {
  id: string;
  reward: Reward;
  timestamp: string;
  status: 'Pendiente' | 'Confirmado' | 'Retirado';
  code: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export type HomeVariant = 'Scanner-first' | 'Goal-first' | 'Promos-first';

export interface Material {
  id: string;
  type: 'Artículo' | 'Imagen' | 'Video';
  title: string;
  description: string;
  thumbnailUrl: string;
  levelRequired?: Level;
  content?: {
    text: { title: string, body: string }[];
    images: string[];
  };
}