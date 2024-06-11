import('serve').then((serve) => {
    serve.default('build', { single: true });
  }).catch(err => {
    console.error('Failed to start serve:', err);
  });
  