type LoginProps = {
  // handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  password: string;
};

function Login(props: LoginProps) {
  return (
    <div>
      <form>
        <div>
          email
          <input
            type="email"
            value={props.email}
            name="email"
            // onChange={props.handleEmail}
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={props.password}
            name="password"
            onChange={props.handlePassword}
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
