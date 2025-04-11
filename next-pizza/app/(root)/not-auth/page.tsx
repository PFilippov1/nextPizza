import { InfoBlock } from '@/shared/components';

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <InfoBlock
        title="Access is prohibited"
        text="Only authorized users can view this page"
        imageUrl="/assets/images/lock.png"
      />
    </div>
  );
}