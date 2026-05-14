import { defineStore } from 'pinia'
import linearImg from '../assets/linear.jpg'
import apiImg from '../assets/api.jpg'
import leadershipImg from '../assets/leadership.jpg'
import pmImg from '../assets/pm.jpg'
import wireframeImg from '../assets/wireframe.jpg'
import jsImg from '../assets/js.jpg'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [
      {
        id: 1,
        title: "Migrating to Linear 101",
        body: "Learn the basics of migrating your workflow to Linear for better productivity.",
        author: "Jonathan Willis",
        date: "19 Jan 2022",
        image: linearImg   // ✅ imported asset
      },
      {
        id: 2,
        title: "Building your API Stack",
        body: "A guide to structuring and scaling your API stack for modern applications.",
        author: "Lana Steiner",
        date: "18 Jan 2022",
        image: apiImg
      },
      {
        id: 3,
        title: "Bill Walsh leadership lessons",
        body: "Exploring timeless leadership principles from Bill Walsh.",
        author: "Eve Wilkins",
        date: "18 Jan 2022",
        image: leadershipImg
      },
      {
        id: 4,
        title: "PM mental models",
        body: "Key mental models every product manager should know.",
        author: "Eve Wilkins",
        date: "18 Jan 2022",
        image: pmImg
      },
      {
        id: 5,
        title: "What is Wireframing?",
        body: "Wireframing explained: why it matters and how to do it right.",
        author: "Lana Steiner",
        date: "18 Jan 2022",
        image: wireframeImg
      },
      {
        id: 6,
        title: "Top 10 Javascript frameworks",
        body: "Our curated list of the best JavaScript frameworks to use in 2022.",
        author: "Lana Steiner",
        date: "18 Jan 2022",
        image: jsImg
      }
    ]
  }),
  actions: {
    fetchPosts() {
      return this.posts
    }
  }
})
