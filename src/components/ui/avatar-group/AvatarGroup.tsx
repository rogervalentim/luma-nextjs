import Image from "next/image";

export interface AvatarItem {
  src: string;
  alt: string;
}

export interface AvatarGroupProps {
  avatars: AvatarItem[];
  max?: number;
  size?: number;
  ringClassName?: string;
}

export function AvatarGroup({
  avatars,
  max,
  size = 32,
  ringClassName = "ring-2 ring-background-light-yellow",
}: AvatarGroupProps) {
  const visibleAvatars = max ? avatars.slice(0, max) : avatars;
  const remainingCount = max && avatars.length > max ? avatars.length - max : 0;

  return (
    <div className="flex items-center -space-x-1.5">
      {visibleAvatars.map((avatar, index) => (
        <Image
          key={`${avatar.src}-${index}`}
          src={avatar.src}
          alt={avatar.alt}
          width={size}
          height={size}
          style={{ width: size, height: size }}
          className={`rounded-full object-cover ${ringClassName}`}
        />
      ))}

      {remainingCount > 0 && (
        <div
          style={{ width: size, height: size }}
          className={`flex items-center justify-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-700 ${ringClassName}`}
          title={`+${remainingCount} usuários`}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
}
