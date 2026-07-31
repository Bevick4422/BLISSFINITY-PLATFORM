export default function BackgroundGlow() {
  return (
    <>
      <div className="absolute left-[-250px] top-[-200px] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="absolute right-[-200px] bottom-[-150px] h-[450px] w-[450px] rounded-full bg-violet-600/20 blur-[150px]" />
    </>
  )
}