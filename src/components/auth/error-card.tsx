import CardWrapper from "@/components/auth/card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
      showSocial={false}
    >
      <div className="w-full flex justify-center items-center">
        <ExclamationTriangleIcon className="h-6 w-6 text-destructive" />
      </div>
    </CardWrapper>
  );
};
