export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Ideas from: Voice-to-Code Generator
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          ```json
[
  {
    \"title\": \"Voice-Driven API Builder\",
    \"description\": \"أداة تتيح للمستخدمين إنشاء واجهات برمجة التطبيقات (APIs) باستخدام الأوامر الصوتية، مما يسهل على المطورين بناء APIs بسرعة ودون الحاجة لكتابة كود.\",
    \"mvp_plan\": \"استخدام مكتبة التعرف على الصوت لتحويل الأوامر الصوتية إلى هيكل API بسيط. إنشاء واجهة مستخدم بسيطة لتجربة المستخدم، وتوفير خيارات لتخصيص API مثل تحديد نقاط النهاية والبيانات المطلوبة.\"
  },
  {
    \"title\": \"Voice-Activated Code Review Assistant\",
    \"description\": \"أداة تساعد المطورين في مراجعة الأكواد باستخدام الأوامر الصوتية، حيث يمكنهم طلب مراجعة أجزاء معينة من الكود والحصول على ملاحظات فورية.\",
    \"mvp_plan\": \"تطوير نموذج أولي يستخدم التعلم الآلي لتحليل الأكواد وتقديم ملاحظات بناءً على الأوامر الصوتية. دمج واجهة بسيطة تسمح للمستخدمين بإدخال أوامر صوتية واستلام الملاحظات عبر النص أو الصوت.\"
  },
  {
    \"title\": \"Voice-to-Documentation Generator\",
    \"description\": \"أداة تقوم بتحويل الأوامر الصوتية إلى وثائق تقنية، مما يساعد المطورين على توثيق مشاريعهم بسهولة وسرعة.\",
    \"mvp_plan\": \"إنشاء نظام بسيط يستخدم التعرف على الصوت لتحويل الأوامر الصوتية إلى نصوص توثيقية. توفير نموذج أولي يمكن للمستخدمين من إدخال أوامر مثل \'أضف توضيحًا لوظيفة X\' وتحويلها إلى نصوص توثيقية منظمة.\"
  }
]
```
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/auth" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Started
          </a>
          <a 
            href="/dashboard" 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Dashboard
          </a>
        </div>
      </div>
    </main>
  )
}