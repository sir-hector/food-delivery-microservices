import ResetPassword from "../../shared/auth/ResetPassword";

const Page = ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) => {
  const activationToken = searchParams["verify"] ?? "";
  return (
    <div>
      <ResetPassword activationToken={activationToken} />
    </div>
  );
};

export default Page;
