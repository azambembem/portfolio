import Navbar from "@/components/Navbar";
import React from "react";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="w-[50%] mx-auto mt-24">
        <div className="text-5xl font-bold mb-8">Blog</div>
        <div className="text-lg leading-relaxed">
          <p className="mb-4">
            안녕하세요! 이 블로그는 제가 학습하면서 겪은 경험과 성장 과정,
            그리고 그동안 쌓아온 노하우를 공유하는 공간입니다. 코딩, 데이터
            분석, 그리고 기계 학습 등 다양한 분야에서의 인사이트를 기록하며,
            여러분과 함께 더 나은 방향으로 나아가고자 합니다.
          </p>
          <h2 className="text-3xl font-semibold mb-4">
            주요 주제는 다음과 같습니다:
          </h2>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              <strong>프로그래밍 팁과 트릭</strong> - 효율적인 코딩과 문제
              해결을 위한 실용적인 팁을 소개합니다.
            </li>
            <li>
              <strong>데이터 분석과 머신러닝</strong> - 데이터 분석과 머신러닝
              프로젝트를 진행하며 배운 경험을 공유합니다. 특히 다중 레이블 분류,
              특징 선택, 모델 평가와 같은 실전 내용을 다룹니다.
            </li>
            <li>
              <strong>개인 성장 이야기</strong> - 학습 과정에서 얻은 성장과
              깨달음을 통해 목표를 이루기 위해 어떻게 나아가고 있는지
              기록합니다.
            </li>
          </ul>
          <p>
            저와 함께 성장하고 배우고 싶으신 분들은 언제든지 환영입니다.
            앞으로의 글도 많이 기대해주세요! 😊
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
