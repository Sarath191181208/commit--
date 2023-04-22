interface IMessagesPrefix {
  readonly emoji: any;
  readonly description: any;
}

let messagePrefixes: Array<IMessagesPrefix> = [
  {
    emoji: "✨ NEW:",
    description: "Add something entirely new.",
  },
  {
    emoji: "🛠️ Refactor:",
    description: "Improve piece of code like refactoring.",
  },
  {
    emoji: "🚧 WIP:",
    description: "Work in progress.",
  },
  {
    emoji: "🐞FIX:",
    description: "Fixed a bug.",
  },
  {
    emoji: "📖 DOC:",
    description: "Anything documentation related.",
  },
  {
    emoji: "🧪 TEST:",
    description: "Commits related to testing.",
  },
  {
    emoji: "💥 BREAKING:",
    description: "Change that breaks previous versions.",
  },
];
export default messagePrefixes;
