import { ref, onMounted } from "vue";

export function formOptions() {
    const moods = ref([])
    const interests = ref([])
    const goals = ref([])

    const loadMockData = () => {
        moods.value = [
            { id: 1, mood: 'happy', emoji: '😄' },
            { id: 2, mood: 'sad', emoji: '😢' },
            { id: 3, mood: 'excited', emoji: '🤩' },
            { id: 4, mood: 'calm', emoji: '😌' },
            { id: 5, mood: 'sleepy', emoji: '😪' },
            { id: 6, mood: 'angry', emoji: '😠' },
            { id: 7, mood: 'stressed', emoji: '😫' },
            { id: 8, mood: 'tired', emoji: '😴' },
            { id: 9, mood: 'motivated', emoji: '🔥' },
            { id: 10, mood: 'anxious', emoji: '😰' },
            { id: 11, mood: 'bored', emoji: '🥱' },
            { id: 12, mood: 'lonely', emoji: '😔' },
        ];

        interests.value = [
            { id: 1, interest: 'animals', emoji: '🐾' },
            { id: 2, interest: 'music', emoji: '🎵' },
            { id: 3, interest: 'sports', emoji: '🏀' },
            { id: 4, interest: 'outdoor activities', emoji: '🏕️' },
            { id: 5, interest: 'dancing', emoji: '💃' },
            { id: 6, interest: 'food', emoji: '🍔' },
            { id: 7, interest: 'gaming', emoji: '🎮' },
            { id: 8, interest: 'gym and fitness', emoji: '🏋️' },
            { id: 9, interest: 'art', emoji: '🎨' },
            { id: 10, interest: 'book', emoji: '📚' },
            { id: 11, interest: 'camping', emoji: '⛺' },
            { id: 12, interest: 'architecture', emoji: '🏛️' },
            { id: 13, interest: 'technology', emoji: '💻' },
            { id: 14, interest: 'movie', emoji: '🎬' },
            { id: 15, interest: 'writing', emoji: '✍️' },
            { id: 16, interest: 'cooking', emoji: '🍳' },
            { id: 17, interest: 'photography', emoji: '📸' },
            { id: 18, interest: 'college life', emoji: '🎓' },
        ];

        goals.value = [
            { id: 1, goal: 'find a study partner', emoji: '📚' },
            { id: 2, goal: 'find a gaming buddy', emoji: '🎮' },
            { id: 3, goal: 'someone willing to listen', emoji: '👂' },
            { id: 4, goal: 'just want to explore', emoji: '🧭' },
            { id: 5, goal: 'collaborate on ideas or projects', emoji: '🤝' },
            { id: 6, goal: 'explore internship or career ideas', emoji: '💼' },
            { id: 7, goal: 'share academic tips/resources', emoji: '📝' },
            { id: 8, goal: 'practice public speaking or performance', emoji: '🎤' },
            { id: 9, goal: 'make new friends', emoji: '🫂' },
            { id: 10, goal: 'improve communication skills', emoji: '🗣️' },
            { id: 11, goal: 'get peer support or advice', emoji: '💬' },
            { id: 12, goal: 'network for future opportunities', emoji: '🌐' },
            { id: 13, goal: 'join or start a club/group', emoji: '🏫' },
            { id: 14, goal: 'build a startup or passion project', emoji: '🚀' }
        ];
    }

    onMounted(loadMockData)

    return {moods, interests, goals}
}