function skillsMember() {
  return {
    restrict: 'E',
    scope: {
      member: '='
    },
    template: `
      <div class="member">
        <div class="member__avatar">
          <img ng-src="{{member.avatar}}" alt="{{member.name}}">
        </div>
        <div class="member__info">
          <h2 class="member__name">{{member.name}}</h2>
          <p class="member__title">{{member.title}}