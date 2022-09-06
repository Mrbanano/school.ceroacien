import Link from "next/link";
import CustomNavbar from "./CustomNavbar/Index";
import BannerAds from "./BannerAds/Index";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <BannerAds show={false} />
      <CustomNavbar>
        <SessionWraper
          isLoading={loading}
          user={session}
          toggle={toggle}
          isOpen={isOpen}
        />
        <ToogleMenu isOpen={isOpen} toggle={toggle} />
      </CustomNavbar>
    </>
  );
}

const SessionWraper = ({ isLoading, user, toggle, isOpen }) => {
  return (
    <section className="w-full">
      {user?.user && (
        <section className="w-full p-1 flex gap-3 items-center">
          <Link href="profile">
            <img
              src={user.user.image}
              alt="Profile"
              className="rounded-full"
              width="50px"
              height="50px"
            />
          </Link>
          <Link href="profile">
            <div>
              <h6 className="d-inline-block dark:text-white capitalize font-medium">
                {user.user.name}
              </h6>
            </div>
          </Link>
          <div
            className={`${
              isOpen ? "rotate-0" : "rotate-180"
            } transition duration-200 ease-out `}
            onClick={toggle}
          >
            <svg
              width={30}
              height={30}
              fill="dark: text-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="m15 10 8.75 10H6.25L15 10Z"
                fill="#000"
              />
            </svg>
          </div>
        </section>
      )}
      {!isLoading && !user && (
        <nav className="grid place-items-center">
          <Link href="/api/auth/signin">
            <a
              className="border-2  border-primary bg-primary text-white font-medium  text-lg h-[35px] px-4   rounded-full grid place-items-center"
              tabIndex={0}
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Inicia sesion
            </a>
          </Link>
        </nav>
      )}
    </section>
  );
};

const ToogleMenu = ({ isOpen, toggle }) => {
  return (
    <section
      className={`
      border-b-2
      ${
        isOpen ? "block" : "hidden"
      } transition duration-200 ease-out  w-[220px] py-2  absolute bottom-[-120px] bg-white`}
    >
      <div className="py-1">
        <Link href="/profile">
          <div className=" p-3 hover:bg-gray-300" onClick={toggle}>
            <Link onClick={toggle} href="/profile">
              Perfil
            </Link>
          </div>
        </Link>
        <Link href="/api/auth/logout">
          <div
            id="qsLogoutBtn"
            className=" p-3 hover:bg-gray-300"
            onClick={toggle}
          >
            <div
              className="btn btn-link p-0"
              onClick={(e) => {
                e.preventDefault();
                toggle();
                signOut({
                  callbackUrl: `${window.location.origin}`,
                });
              }}
            >
              Cerrar sesion
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

/**
 *  <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className={styles.signedInStatus}>
        <p
          className={`nojs-show ${
            !session && loading ? styles.loading : styles.loaded
          }`}
        >
          {!session && (
            <>
              <span className={styles.notSignedInText}>
                You are not signed in
              </span>
              <a
                href={`/api/auth/signin`}
                className={styles.buttonPrimary}
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Sign in
              </a>
            </>
          )}
          {session?.user && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className={styles.avatar}
                />
              )}
              <span className={styles.signedInText}>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email ?? session.user.name}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a>
            </>
          )}
        </p>
      </div>
      <nav>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/client">
              <a>Client</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/server">
              <a>Server</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/protected">
              <a>Protected</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/api-example">
              <a>API</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/admin">
              <a>Admin</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/me">
              <a>Me</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
 */
