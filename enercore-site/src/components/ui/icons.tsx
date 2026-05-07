type IconProps = { className?: string; size?: number };

function StrokeIcon({ size, className, children }: { size: number; className?: string; children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

export function IconBolt({ size = 24, className }: IconProps) {
  return (
    <StrokeIcon size={size} className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </StrokeIcon>
  );
}

export function IconBuilding({ size = 24, className }: IconProps) {
  return (
    <StrokeIcon size={size} className={className}>
      <rect x="2" y="7" width="20" height="14" rx="1" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </StrokeIcon>
  );
}

export function IconRuler({ size = 24, className }: IconProps) {
  return (
    <StrokeIcon size={size} className={className}>
      <path d="M2 21l19-9L2 3v7l14 2-14 2v7z" />
    </StrokeIcon>
  );
}

export function IconDraftingCompass({ size = 24, className }: IconProps) {
  return (
    <StrokeIcon size={size} className={className}>
      <circle cx="12" cy="5" r="2" />
      <path d="M10.58 7.16L5 20" />
      <path d="M13.42 7.16L19 20" />
      <path d="M7 20h10" />
    </StrokeIcon>
  );
}

export function IconMessageSquare({ size = 24, className }: IconProps) {
  return (
    <StrokeIcon size={size} className={className}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </StrokeIcon>
  );
}

export function IconWrench({ size = 24, className }: IconProps) {
  return (
    <StrokeIcon size={size} className={className}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </StrokeIcon>
  );
}

export function IconCheck({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function IconStar({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function IconQuote({ size = 32, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" className={className}>
      <path d="M0 17.843V28h10.91V17.843H3.637C3.637 13.48 7.273 9.913 11.818 9.913V4C4.546 4 0 9.035 0 17.843zm20.364 0V28H31.272V17.843h-7.272c0-4.363 3.636-7.93 8.181-7.93V4c-7.272 0-11.817 5.035-11.817 13.843z" />
    </svg>
  );
}

export function IconTarget({ size = 24, className }: IconProps) {
  return (
    <StrokeIcon size={size} className={className}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </StrokeIcon>
  );
}

export function IconLayers({ size = 24, className }: IconProps) {
  return (
    <StrokeIcon size={size} className={className}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </StrokeIcon>
  );
}

export function IconMapPin({ size = 24, className }: IconProps) {
  return (
    <StrokeIcon size={size} className={className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </StrokeIcon>
  );
}

export function IconShield({ size = 24, className }: IconProps) {
  return (
    <StrokeIcon size={size} className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </StrokeIcon>
  );
}

export function IconSun({ size = 24, className }: IconProps) {
  return (
    <StrokeIcon size={size} className={className}>
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </StrokeIcon>
  );
}

export function IconSettings({ size = 24, className }: IconProps) {
  return (
    <StrokeIcon size={size} className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </StrokeIcon>
  );
}

export function IconArrowRight({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

const SERVICE_ICON_MAP: Record<string, React.ComponentType<IconProps>> = {
  bolt:       IconBolt,
  building:   IconBuilding,
  compass:    IconDraftingCompass,
  consulting: IconMessageSquare,
  wrench:     IconWrench,
};

export function ServiceIcon({ name, size = 24, className }: { name: string } & IconProps) {
  const Icon = SERVICE_ICON_MAP[name] ?? IconBolt;
  return <Icon size={size} className={className} />;
}

const TEAM_ICON_MAP: Record<string, React.ComponentType<IconProps>> = {
  target:   IconTarget,
  settings: IconSettings,
  wrench:   IconWrench,
};

export function TeamIcon({ name, size = 24, className }: { name: string } & IconProps) {
  const Icon = TEAM_ICON_MAP[name] ?? IconTarget;
  return <Icon size={size} className={className} />;
}
