interface IMessagesPrefix {
  readonly prefix: any;
  readonly description: any;
}

let messagePrefixesStandard: Array<IMessagesPrefix> = [
  {
    prefix: "✨ NEW:",
    description: "Add something entirely new.",
  },
  {
    prefix: "🛠️ Refactor:",
    description: "Improve piece of code like refactoring.",
  },
  {
    prefix: "🚧 WIP:",
    description: "Work in progress.",
  },
  {
    prefix: "🐞FIX:",
    description: "Fixed a bug.",
  },
  {
    prefix: "📖 DOC:",
    description: "Anything documentation related.",
  },
  {
    prefix: "🧪 TEST:",
    description: "Commits related to testing.",
  },
  {
    prefix: "💥 BREAKING:",
    description: "Change that breaks previous versions.",
  },
];
export  {messagePrefixesStandard, IMessagesPrefix};
