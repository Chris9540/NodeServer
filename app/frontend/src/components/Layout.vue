<template>
  <div class="root">
    <header>
      <div>

      </div>
      <div>

      </div>
      <nav>
        <ul>
          <li title="List Employees">
            <router-link to="/">
              <font-awesome-icon :icon="list"/>
            </router-link>
          </li>
          <li title="Add Employee">
            <router-link to="/add">
              <font-awesome-icon :icon="user"/>
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <slot>
        Error
      </slot>
    </main>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faList, faUserPlus } from '@fortawesome/free-solid-svg-icons'

export default {
  name: "Layout",
  components: {FontAwesomeIcon},
  data() {
    return {
      list : faList,
      user: faUserPlus
    }
  },
}
</script>

<style lang="scss" scoped>
$border : 1px solid #666;
.root {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 44px 1fr;
  min-width: 900px;
  > {
    header {
      background: #333;
      color: black;
      display: grid;
      grid-template-columns: auto auto auto;
      > {
        nav {
          height: 100%;
          > ul {
            display: flex;
            width: 100%;
            list-style: none;
            height: 100%;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
            > li {
              width: 40px;
              height: 40px;
              display: flex;
              padding-right: 2px;
              border-right: $border;
              background: #333;
              transition: all linear 0.2s;
              &:first-child {
                border-left: $border;
              }
              &:last-child {
                margin-right: 8px;
              }
              &:hover {
                >a {
                  > svg{
                    color: orangered;
                  }
                }
               filter: brightness(120%);
              }
              > a {
                width: 32px;
                height: 32px;
                margin: auto;
                > svg {
                  width: 32px;
                  height: 32px;
                }
              }
            }
          }
        }
      }
    }
    main {
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
}
</style>
