'use client';
import Link from "next/link";

export default function ClientLayout({ children }: {
    children: React.ReactNode;
}) {

    return (
        <>
            <header>
                <nav className="flex gap-4">
                    <Link href="/">메인</Link>
                    <Link href="/posts">목록</Link>
                    <Link href="/members/login">로그인</Link>
                    <button className="hover:cursor-pointer"
                        onClick={() => {
                            console.log("로그아웃 수행");
                        }}
                    >로그아웃</button>
                </nav>
            </header>
            <main className="flex-grow flex flex-col gap-4 justify-center items-center">
                {children}
            </main>
            <footer>푸터</footer>
        </>
    )
}