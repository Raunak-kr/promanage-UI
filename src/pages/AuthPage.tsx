import { useState } from 'react';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ForgotPasswordPage from './ForgotPasswordPage';

function AuthPage() {
    const [mode, setMode] = useState<'login' | 'register' | 'forgot'>('login');


    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#f5f5f5',
            }}
        >
            <div
                style={{
                    width: '380px',
                    padding: '24px',
                    background: '#fff',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                }}
            >
                {/* FORM */}
                {/* {mode === 'login' ? <LoginPage /> : <RegisterPage />} */}

                {/* {mode === 'login' ? (
                    <LoginPage />
                ) : (
                    <RegisterPage onSuccess={() => setMode('login')} />
                )} */}
                {mode === 'login' && <LoginPage />}
                {mode === 'register' && (
                    <RegisterPage onSuccess={() => setMode('login')} />
                )}
                {mode === 'forgot' && <ForgotPasswordPage />}


                {/* FOOTER LINKS */}
                {/* <div style={{ marginTop: '16px', textAlign: 'center' }}>
                    {mode === 'login' ? (
                        <>
                            <p>
                                <a href="#">Forgot password?</a>
                            </p>
                            <p>
                                Don’t have an account?{' '}
                                <button onClick={() => setMode('register')}>
                                    Sign up
                                </button>
                            </p>
                        </>
                    ) : (
                        <p>
                            Already have an account?{' '}
                            <button onClick={() => setMode('login')}>
                                Login
                            </button>
                        </p>
                    )}
                </div> */}
                <div style={{ marginTop: '16px', textAlign: 'center' }}>
                    {mode === 'login' && (
                        <>
                            <p>
                                <button onClick={() => setMode('forgot')}>
                                    Forgot password?
                                </button>
                            </p>
                            <p>
                                Don’t have an account?{' '}
                                <button onClick={() => setMode('register')}>
                                    Sign up
                                </button>
                            </p>
                        </>
                    )}

                    {mode === 'register' && (
                        <p>
                            Already have an account?{' '}
                            <button onClick={() => setMode('login')}>
                                Login
                            </button>
                        </p>
                    )}

                    {mode === 'forgot' && (
                        <p>
                            <button onClick={() => setMode('login')}>
                                Back to Login
                            </button>
                        </p>
                    )}
                </div>




            </div>
        </div>
    );
}

export default AuthPage;
