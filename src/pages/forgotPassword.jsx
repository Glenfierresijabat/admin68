import FormForgotPassword from "../components/Fragments/FormForgotPassword";
import AuthLayout from "../components/Layouts/AuthLayout";

const ForgotPasswordPage = () => {
  return (
    <AuthLayout type="forgot">
      <FormForgotPassword />
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
