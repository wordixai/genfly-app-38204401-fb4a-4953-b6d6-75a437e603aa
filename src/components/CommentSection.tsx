import { X } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

interface Comment {
  id: string
  author: {
    name: string
    initial: string
    avatarColor: string
  }
  content: string
  timeAgo: string
  replies?: number
}

const comments: Comment[] = [
  {
    id: "1",
    author: {
      name: "Bibigo",
      initial: "B",
      avatarColor: "bg-blue-500 text-white"
    },
    content: "타이틀 문구가 변경 되었습니다.",
    timeAgo: "2일전"
  },
  {
    id: "2",
    author: {
      name: "Starbucks",
      initial: "S",
      avatarColor: "bg-amber-400 text-white"
    },
    content: "리스트 가로폭 변경(660->700) 및 위치 수정(타이틀 영역과 그리드 맞춤)내용이제일 긴 케이스 이후에는 말줄임...",
    timeAgo: "10분전",
    replies: 1
  },
  {
    id: "3",
    author: {
      name: "WhaleTeam",
      initial: "W",
      avatarColor: "bg-emerald-500 text-white"
    },
    content: "고오래님 안녕하세요.\n해당 내용 참고 부탁 드립니다.",
    timeAgo: "1일전"
  },
  {
    id: "4",
    author: {
      name: "Bibigo",
      initial: "B",
      avatarColor: "bg-blue-500 text-white"
    },
    content: "",
    timeAgo: "2일전"
  }
]

export function CommentSection() {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-bold">코멘트</h2>
        <div className="flex space-x-2">
          <button className="p-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="12" r="1" fill="currentColor" />
              <circle cx="12" cy="12" r="1" fill="currentColor" />
              <circle cx="20" cy="12" r="1" fill="currentColor" />
            </svg>
          </button>
          <button className="p-1">
            <X size={20} />
          </button>
        </div>
      </div>
      
      <div className="max-h-[500px] overflow-y-auto">
        {comments.map((comment) => (
          <div key={comment.id} className="p-4">
            <div className="flex items-start gap-3">
              <Avatar className={`${comment.author.avatarColor}`}>
                <AvatarFallback>{comment.author.initial}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold">{comment.author.name}</h3>
                  <span className="text-sm text-gray-500">{comment.timeAgo}</span>
                </div>
                
                <p className="mt-1 text-sm whitespace-pre-line">
                  {comment.content || ""}
                </p>
                
                {comment.replies && (
                  <div className="mt-2 text-sm text-gray-500">
                    {comment.replies}개의 답변
                  </div>
                )}
              </div>
            </div>
            <Separator className="mt-4" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentSection