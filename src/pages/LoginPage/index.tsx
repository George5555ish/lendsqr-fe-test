import React from "react";
import logo from "../../assets/logo.svg";
import WelcomeIllustration from "../../assets/welcome-page-illustration.svg";
import Input from "../../components/InputComponent";
import Button from "../../components/ButtonComponent";

import { useNavigate } from "react-router-dom";
function InputToggleBtn({
  showPassword,
  setShowPassword,
}: {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <p
      className="heading_font_family text_neutral_600 fw_600 fs_12 | toggle_btn"
      onClick={() => setShowPassword((prev) => !prev)}
    >
      {showPassword ? "HIDE" : "SHOW"}
    </p>
  );
}
function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className="">
      <div className="container login-container">
        <div className="even-columns login_main">
          <div>
            <div className="image-container">
              <img src={logo} alt="logo" />
            </div>
            <div className="illustration-container">
              <img src={WelcomeIllustration} alt="logo" />
            </div>
          </div>
          <div className="login-form-container">
            <div className="login-form-main">
              <p className="heading_font_family text_primary_800 fw_700 fs_40">
                Welcome!
              </p>
              <p className="body_font_family text_primary_400 fw_400 fs_20">
                Enter details to login.
              </p>
              <form onSubmit={() => navigate("/dashboard")}>
                <Input
                  inputType="email"
                  placeholder={"Email"}
                  required={true}
                />
                <div className="password-wrap">
                  <Input
                    inputType="password"
                    required={true}
                    placeholder={"Password"}
                    showPassword={showPassword}
                    child={
                      <InputToggleBtn
                        setShowPassword={setShowPassword}
                        showPassword={showPassword}
                      />
                    }
                  />
                </div>
                <p className="heading_font_family text_neutral_600 fw_600 fs_12">
                  FORGOT PASSWORD ?
                </p>
                <Button
                  buttonText="LOG IN"
                  type={"submit"}
                  buttonHandler={() => {}}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
