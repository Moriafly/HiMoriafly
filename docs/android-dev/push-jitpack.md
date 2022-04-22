## 1

在 library build.gradle 添加

```groovy
id 'maven-publish'
```

```groovy
afterEvaluate {
    publishing {
        publications {
            release(MavenPublication) {
                from components.release

                groupId = 'com.github.moriafly'
                artifactId = 'regret'
                version = '1.0.0-alpha01'
            }
        }
    }
}
```