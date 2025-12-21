export default function Footer(){
    return (
        <footer className="bg-gray-950 text-gray-400 text-center py-4 text-sm">
            &copy; {new Date().getFullYear()} CineScope. Built with ❤️ using TMDB API.
        </footer>
    )
}