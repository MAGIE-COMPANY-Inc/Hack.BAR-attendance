import React, { FC, useCallback, useState, useEffect } from "react";
import firebase from "firebase";
import Router from "next/router";
import { GoogleIcon } from "../components/Icon/GoogleIcon";
import { Button } from "../components/shared/Button";
import Link from "next/link";
import type { NextPage } from "next";
import { GithubIcon } from "../components/Icon/GithubIcon";

import { githubProvider, googleProvider } from "../auth/AuthMethods";
import socialMediaAuth from "../auth/SocialMediaAuth";

const Signup: NextPage = () => {
  const auth = firebase.auth();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user && Router.push("/");
    });
  }, []);

  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };

  return (
    <div className="bg-white font-family-karla h-screen">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          {/* いい感じの画像置く */}
          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <h1 className="text-center mb-2 font-mono text-4xl">Hack.BAR 勤怠システム <span className="text-3xl md:text-5xl">👋</span></h1>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col">
          {/* 入会方法側・ログイン */}
          <div className="flex flex-col  my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl font-bold mt-28">勤怠ルール</p>
            <div className="flex flex-row">
              <div className="bg-gray-700 rounded-full h-8 w-8 flex items-center justify-center mt-10">
                <p className="text-xl text-white">1</p>
              </div>
              <div className="flex-col">
                <p className="text-xl ml-6 mt-10">下記よりアカウント作成</p>
                <p className="text-xs ml-6 mt-2">
                  Google連携が必要です
                </p>
              </div>
            </div>
            <div className=" flex flex-row">
              <div className="bg-gray-700 rounded-full h-8 w-8 flex items-center justify-center mt-10">
                <p className="text-xl text-white">2</p>
              </div>
              <div className="flex-col">
                <p className="text-xl ml-6 mt-10">勤怠の入力</p>
                <p className="text-xs ml-6 mt-2">
                  webから勤怠スケジュールの入力をお願いします
                </p>
              </div>
            </div>
            <div className=" flex flex-row">
              <div className="bg-gray-700 rounded-full h-8 w-8 flex items-center justify-center mt-10">
                <p className="text-xl text-white">3</p>
              </div>
              <div className="flex-col">
                <p className="text-xl ml-6 mt-10">勤怠日に楽しく出勤！</p>
                <p className="text-xs ml-6 mt-2">
                  勤怠前日にSlackにて勤怠通知が届きます
                </p>
              </div>
            </div>
            <Button
              variant="solid-white"
              className="py-4 w-72 sm:w-80 mt-5"
              onClick={() => {
                handleOnClick(googleProvider);
              }}
            >
              <div className="flex">
                <GoogleIcon className="mr-3" />
                <span>Sign up with Google</span>
              </div>
            </Button>
            <div className=" pt-6 pb-12">
              <p className="text-sm">
                既にアカウントをお持ちですか？{" "}
                <Link href="/signin">
                  <a className="text-blue-400">サインイン</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
