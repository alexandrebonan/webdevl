import "./styles.css";

import projects from "./projects";

function createElementByTagWithClasses(tag, classnames) {
  const element = document.createElement(tag);
  element.className = classnames;
  return element;
}

const renderLink = (link, type) => {
  const linkElement = createElementByTagWithClasses("a", "link");
  const linkImage = createElementByTagWithClasses("img", "linkImage");
  switch (type) {
    case "github":
      linkImage.src =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png";
      break;
    case "surge":
      linkImage.src =
        "data:image/jpeg;base64,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";
      break;
    default:
      break;
  }
  linkElement.appendChild(linkImage);
  linkElement.href = link;
  return linkElement;
};

const renderLinks = project => {
  const { github, surge } = project;
  const linksContainer = createElementByTagWithClasses("div", "linksContainer");
  if (github) {
    linksContainer.appendChild(renderLink(github, "github"));
  }
  if (surge) {
    linksContainer.appendChild(renderLink(surge, "surge"));
  }
  return linksContainer;
};

const renderAuthorPictures = project => {
  const picturesContainer = createElementByTagWithClasses(
    "div",
    "authorPicturesContainer"
  );

  let pictureClasses = "authorPicture";
  if (project.authors.length > 1) {
    pictureClasses += " multipleAuthorsAuthorPicture";
  }
  project.authors.forEach(({ photo }) => {
    const authorPicture = createElementByTagWithClasses("img", pictureClasses);
    authorPicture.src = photo;
    picturesContainer.appendChild(authorPicture);
  });

  return picturesContainer;
};

const renderAuthorNames = project => {
  const formattedNames = project.authors
    .map(({ firstname, lastname }) => {
      return `${firstname} ${lastname}`;
    })
    .join(" & ");
  const namesElement = createElementByTagWithClasses("span", "authorNames");
  namesElement.innerHTML = formattedNames;
  return namesElement;
};

const renderProjectCell = project => {
  if (!project || !project.authors || !project.authors.length) {
    return null;
  }

  let containerClasses = "projectCellContainer";
  if (project.authors.length > 1) {
    containerClasses += " multipleAuthorsProjectCellContainer";
  }
  const projectCell = createElementByTagWithClasses("div", containerClasses);

  const pictures = renderAuthorPictures(project);
  projectCell.appendChild(pictures);

  const names = renderAuthorNames(project);
  projectCell.appendChild(names);

  const { github, surge } = project;
  if (github || surge) {
    const links = renderLinks(project);
    projectCell.appendChild(links);
  }

  return projectCell;
};

const renderProjects = () => {
  const container = document.getElementById("container");
  if (!container) {
    return null;
  }
  projects.forEach(project => {
    const projectCell = renderProjectCell(project);
    container.appendChild(projectCell);
  });
};

renderProjects();
