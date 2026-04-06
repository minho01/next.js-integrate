'use client';
import { fetchApi } from "@/lib/client";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function ClientLayout({ children }: {
    children: React.ReactNode;
}) {

    const [loginMember, setLoginMember] = useState<MemberDto | null>(null);
    const isLogin = loginMember !== null;

    useEffect(() => {
        fetchApi("/api/v1/members/me")
            .then((memberDto) => {
                setLoginMember(memberDto);
            })
            .catch((err) => {
                console.log("err", err);
            });
    }, []);

    const logout = () => {
        confirm("로그아웃 하시겠습니까?") &&
            fetchApi("/api/v1/members/logout", {
                method: "DELETE",
            })
                .then((data) => {
                    alert(data.msg);
                    setLoginMember(null);
                })
                .catch((rsData) => {
                    alert(rsData.msg);
                });
    };

    return (
        <>
            <header>
                <nav className="flex gap-4">
                    <Link href="/">메인</Link>
                    <Link href="/posts">목록</Link>
                    {!isLogin && <Link href="/member/login">로그인</Link>}
                    {isLogin && <button onClick={logout}>로그아웃</button>}
                    {isLogin && <Link href="#">{loginMember?.name}</Link>}
                </nav>
            </header>
            <main className="flex-grow flex flex-col gap-4 justify-center items-center">
                {children}
            </main>
            <footer>푸터</footer>
        </>
    )
}