import {useForm} from "react-hook-form";

interface IForm {
    email: string;
    password: string;
}

function Login(){
    const {register, watch, handleSubmit, errors} = useForm<IForm>();

    console.log(watch())

    const onSubmitCustom = (data: any) => {
        console.log(data);
    };

    return (
        <div className="flex flex-col md:flex-row h-screen">
          {/* 왼쪽 이미지 섹션 */}
          <div className="hidden md:flex md:w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
            {/* 이미지 내용 */}
          </div>
          {/* 오른쪽 로그인 폼 섹션 */}
          <div className="flex w-full md:w-1/2 justify-center items-center p-6">
            <div className="w-full max-w-md">
              <h2 className="text-2xl font-bold mb-6 text-center">로그인</h2>
              <form onSubmit={handleSubmit(onSubmitCustom)}>
                <div className="mb-4">
                  <label className="block text-gray-700">이메일</label>
                  <input
                    {...register('email',
                        {
                            required: '필수 입력 사항입니다.',
                        }
                    )}
                    type="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="이메일을 입력하세요"
                  />
                  <span>{errors}</span>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700">비밀번호</label>
                  <input
                    {...register('password',
                        {
                            required: '필수 입력 사항입니다.',
                        }
                    )}
                    type="password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="비밀번호를 입력하세요"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                  로그인
                </button>
              </form>
            </div>
          </div>
        </div>
      );
}

export default Login