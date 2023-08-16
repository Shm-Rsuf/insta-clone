import Header from "@/components/Header";
import { getProviders, signIn } from "next-auth/react";
const SignInPage = ({ providers }) => {
  // console.log("pro::", providers);
  // console.log(getProviders());
  return (
    <>
      <Header />
      <div className="">
        <picture>
          <img
            src="https://superviral.com.au/wp-content/uploads/2021/10/Buy-Instagram-Followers-Australia.png"
            alt="Instagram"
          />
        </picture>
        <div className="">
          {Object.values(providers || true).map((provider) => (
            <div key={provider.name}>
              <picture>
                <img
                  src="https://freelogopng.com/images/all_img/1658588965instagram-logo-png-transparent-background.png"
                  alt="imagessss"
                />
              </picture>
              <p>This app is created for learnign purpose</p>
              <button>Sing in with {provider.name}</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SignInPage;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
