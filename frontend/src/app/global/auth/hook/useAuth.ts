import { fetchApi } from "@/lib/client";
import { useState } from "react";

export function useAuth() {

    const [loginMember, setLoginMember] = useState<MemberDto | null>(null);

    const getLoginMember = () => {
        fetchApi("/api/v1/members/me")
            .then((memberDto) => {
                setLoginMember(memberDto);
            })
            .catch((err) => {
            });
    }

    const logout = () => {
        confirm("로그아웃 하시겠습니까?") &&
            fetchApi("/api/v1/members/logout", {
                method: "DELETE",
            })
                .then((data) => {
                    setLoginMember(null);
                    alert(data.msg);
                })
                .catch((rsData) => {
                    alert(rsData.msg);
                });
    };

    return { loginMember, getLoginMember, logout };
}