import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Button from '../components/Button';
import illustration from '../../public/illustration-desktop.png';
import iconList from '../../public/icon-list.svg';
import { Roboto } from 'next/font/google';
import { useState } from 'react';
import { useRouter } from 'next/router';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Home() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.length > 0 && isValid) {
      router.push({
        pathname: '/success',
        query: { email },
      });
    }
  };

  const blurInput = ({ target }) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (regex.test(target.value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <>
      <Head>
        <title>News Letter</title>
      </Head>
      <main className={`${roboto.className} animaLeft ${styles.main}`}>
        <div className={styles.conteudoPrincipal}>
          <form className={styles.formConteudo} onSubmit={handleSubmit}>
            <h1>Stay Updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
              <li>
                <Image src={iconList} width={16} />
                Product discovery and building what matters
              </li>
              <li>
                <Image src={iconList} width={16} />
                Measuring to ensure updates are a success
              </li>
              <li>
                <Image src={iconList} width={16} />
                And much more!
              </li>
            </ul>
            <div className={styles.divEmail}>
              <label>
                Email address{' '}
                {isValid ? null : (
                  <span className={styles.emailRequired}>
                    valid email required
                  </span>
                )}
              </label>
              <input
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                onBlur={blurInput}
                placeholder="email@company.com"
                className={isValid ? null : styles.inputValidate}
              />
            </div>
            <Button>Subscribe to monthly newsletter</Button>
          </form>
          <div className={styles.divImg}>
            <Image src={illustration} fill={true} />
          </div>
        </div>
      </main>
    </>
  );
}
