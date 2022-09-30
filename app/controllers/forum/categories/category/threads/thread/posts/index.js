import {inject as service} from '@ember/service';
import Controller from '@ember/controller';
import {action} from '@ember/object';
import {next} from '@ember/runloop';
import { tracked } from '@glimmer/tracking';

export default class PostsIndexController extends Controller {
  @service session;
  @service store;
  @tracked
  newContent = '';
  queryParams = ['page'];

  @tracked
  postsPaged;

  get count() {
    return this.model.postsPaged.length;
  }

  get currentPageIsLastPage() {
    const page = parseInt(this.model.postsPaged.meta.page, 10);
    const totalPages = parseInt(this.model.postsPaged.meta.totalPages, 10);

    return totalPages === 0 || page === totalPages;
  }

  advanceToPage(delta) {
    const page = this.model.postsPaged.meta.page;
    const pages = this.model.postsPaged.meta.totalPages;
    this.replaceRoute({
      queryParams: {page: ((page - 1 + delta + pages) % pages) + 1},
    });
  }

  async queryPostsPaged(params) {
    this.postsPaged = await this.store.queryPaged('forum/post', params);
  }

  scrollToNewForumPost() {
    document
      .getElementById('newForumPostCard')
      .scrollIntoView({behavior: 'smooth', block: 'center'});
  }

  @action
  async newPostCreated() {
    await this.model.posts.reload();
  }

  @action
  async addQuote(q) {
    this.set('newContent', `${this.newContent}${q} \n\n`);

    if (!this.currentPageIsLastPage) {
      await this.transitionToRoute({
        queryParams: {page: this.postsPaged.meta.totalPages},
      })
      next(() => {
        this.scrollToNewForumPost();
      });
    } else {
      this.scrollToNewForumPost();
    }
  }

  @action
  goToPreviousPage() {
    return this.advanceToPage(-1);
  }

  @action
  goToNextPage() {
    return this.advanceToPage(1);
  }

  @action
  onSwipe(direction) {
    return this.advanceToPage(-direction);
  }
}
