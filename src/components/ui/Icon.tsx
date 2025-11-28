import React from 'react';
import {
    Zap,
    Activity,
    Wifi,
    DoorOpen,
    Wrench,
    Link,
    LayoutDashboard,
    Building2,
    HelpCircle,
    MapPin,
    Star,
    Info,
    Mail,
    Phone,
    Calendar,
    Check,
    ChevronDown,
    ChevronRight,
    Menu,
    X,
    ArrowRight,
    Shield,
    DollarSign,
    CheckCircle,
    Settings,
    MessageCircle,
    Map,
    Users,
    Heart,
    ClipboardList,
    BarChart3,
    ShieldCheck,
    Send,
    ChevronLeft,
    Clock,
    Smile,
    Play,
    Pause,
    Home,
    BookOpen,
    AlertTriangle,
    WrenchIcon,
    Instagram,
    Youtube,
    Facebook
} from 'lucide-react';

export const iconMap = {
    bolt: Zap,
    spring: Activity,
    remote: Wifi,
    door: DoorOpen,
    wrench: Wrench,
    cable: Link,
    panel: LayoutDashboard,
    track: Pause,
    building: Building2,
    // General UI
    question: HelpCircle,
    helpCircle: HelpCircle,
    map: Map,
    mapPin: MapPin,
    star: Star,
    info: Info,
    mail: Mail,
    phone: Phone,
    calendar: Calendar,
    check: Check,
    chevronDown: ChevronDown,
    chevronRight: ChevronRight,
    menu: Menu,
    close: X,
    arrowRight: ArrowRight,
    shield: Shield,
    dollar: DollarSign,
    checkCircle: CheckCircle,
    settings: Settings,
    message: MessageCircle,
    users: Users,
    heart: Heart,
    clipboard: ClipboardList,
    barChart: BarChart3,
    shieldCheck: ShieldCheck,
    send: Send,
    chevronLeft: ChevronLeft,
    clock: Clock,
    smile: Smile,
    play: Play,
    pause: Pause,
    home: Home,
    bookOpen: BookOpen,
    alertTriangle: AlertTriangle,
    // Social Media
    instagram: Instagram,
    youtube: Youtube,
    facebook: Facebook,
    default: HelpCircle
};

export type IconName = keyof typeof iconMap;

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: string;
}

export const Icon: React.FC<IconProps> = ({ name, className, ...props }) => {
    const IconComponent = iconMap[name as IconName] || iconMap.default;

    // Fill stars by default for better visual consistency
    if (name === 'star') {
        return <IconComponent className={className} fill="currentColor" {...props} />;
    }

    return <IconComponent className={className} {...props} />;
};
