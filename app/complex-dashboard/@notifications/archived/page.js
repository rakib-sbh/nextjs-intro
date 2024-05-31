import Link from "next/link";

const { default: Card } = require("@/components/card");

const ArchivedNotification = () => {
  return (
    <Card>
      <div>Archived Notifications</div>
      <Link href={"/complex-dashboard"}>Default</Link>
    </Card>
  );
};

export default ArchivedNotification;
