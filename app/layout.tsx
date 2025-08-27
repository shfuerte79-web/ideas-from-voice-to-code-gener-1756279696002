import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Voice-to-Code Generator',
  description: '```json
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
```',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}