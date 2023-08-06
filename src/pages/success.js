import { useRouter } from 'next/router';
import { Roboto } from 'next/font/google';
import styles from '../styles/Success.module.css';
import Image from 'next/image';
import iconSuccess from '../../public/icon-success.svg';
import Button from '../components/Button';
import Link from 'next/link';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Success = () => {
  const router = useRouter();
  const { email } = router.query;
  return (
    <div className={`${roboto.className} animaLeft ${styles.successContainer}`}>
      <div className={styles.successConteudo}>
        <Image src={iconSuccess} width={40} />
        <h1>Thanks for subscribing!</h1>
        <span>
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription.
        </span>

        <Button>
          <Link href={'/'}>Dismiss message</Link>
        </Button>
      </div>
    </div>
  );
};

export default Success;
