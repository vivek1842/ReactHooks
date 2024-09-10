import { useForm } from "react-hook-form";
const OptimizedMain = () => {
  const form = useForm();
  const { register, handleSubmit } = form;

    const onSubmit = (data) => {    //our defined function 
        console.log(data);
    }

  return (
    <>
      <h2>Optimized Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Username:</label>
          <input 
            type="text"
            id="username" 
            {...register("username")}
            placeholder="Enter your username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="Enter your password"
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
};

export default OptimizedMain;
