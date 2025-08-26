import React from 'react'
import {
  CardHeader,
  CardGroup,
  CardDescription,
  CardContent,
  Card,
  Image,
  Icon,
  Button
} from 'semantic-ui-react'

function Tutorial() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>FEATURED TUTORIALS</h1>
      <CardGroup itemsPerRow={3}>
        <Card>
          <CardContent>
            <Image src={require("./dog.png")} style={{ width: "200px", height: "200px", objectFit: "cover" }} />
            <CardHeader>Dog</CardHeader>
            <CardDescription>
              dog is the most loyal animal <strong>dog</strong>
            </CardDescription>
          </CardContent>
          <CardContent extra>
            <div>
              <Icon name='star' color='yellow' /> 3 &nbsp;
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Image src={require("./nature.png")} style={{ width: "200px", height: "200px", objectFit: "cover" }} />
            <CardHeader>Scenery</CardHeader>
            <CardDescription>
              This is a beautiful scenery of mountains <strong>nature</strong>
            </CardDescription>
          </CardContent>
          <CardContent extra>
            <div>
              <Icon name='star' color='yellow' /> 5 &nbsp;
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Image src={require("./r.png")} style={{ width: "200px", height: "200px", objectFit: "cover" }} />
            <CardHeader>React</CardHeader>
            <CardDescription>
              This is an image of react - full stack development <strong>react</strong>
            </CardDescription>
          </CardContent>
          <CardContent extra>
            <div>
              <Icon name='star' color='yellow' /> 4 &nbsp;
            </div>
          </CardContent>
        </Card>
      </CardGroup>
      <Button primary style={{ marginTop: "20px" }}>SEE ALL TUTORIALS</Button>
    </div>
  )
}

export default Tutorial
