interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_PROVIDER || 'ethereal',

  defaults: {
    from: {
      email: '201700045@uesb.edu.br',
      name: 'Luiz Arruda',
    },
  },
} as IMailConfig;
