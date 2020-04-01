export function hitTemplate(hit) {
    return `
      <div class="hit">
        <div class="hit-content">
          <div>
            <div class="hit-name">${hit._highlightResult.name.value}</div>
            <div class="hit-description">${
              hit._snippetResult.description.value
            }</div>
          </div>
        </div>
      </div>
    `;
  }