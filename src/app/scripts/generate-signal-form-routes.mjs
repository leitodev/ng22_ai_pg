import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const examplesDir = path.resolve(__dirname, '../pages/signal-forms/examples');

const outputFile = path.resolve(
  __dirname,
  '../pages/signal-forms/signal-forms.routes.generated.ts',
);

// Ищем все example-N.component.ts
const files = await fs.readdir(examplesDir);

const examples = files
  .map((file) => {
    const match = file.match(/^example-(\d+)\.component\.ts$/);

    return match ? { id: Number(match[1]), file } : null;
  })
  .filter(Boolean)
  .sort((a, b) => a.id - b.id);

// Проверяем наличие компонентов
if (examples.length === 0) {
  throw new Error('No example components found!');
}

// Генерируем маршруты
const routes = examples
  .map(
    ({ id }) => `
  {
    path: '${id}',
    loadComponent: () =>
      import('./examples/example-${id}.component')
        .then(m => m.SignalFormExample${id}Component)
  },
`,
  )
  .join('\n');

// Формируем TypeScript-файл
const content = `
// AUTO-GENERATED FILE. DO NOT EDIT MANUALLY.

import { Routes } from '@angular/router';

export const signalFormExampleRoutes: Routes = [
  ${routes}
];
`;

// Записываем файл
await fs.writeFile(outputFile, content.trimStart(), 'utf8');

console.log(`Generated ${examples.length} signal form routes.`);
